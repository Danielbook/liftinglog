import React from "react";
import {connect} from "react-redux";
import Auth from "../Auth/Auth";
import Dashboard from "./Dashboard";
import {setUser} from "../../modules/App/AppActions";

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      userID:     '',
      userName:   '',
      userEmail:  ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          userID:     xhr.response.userID,
          userName:   xhr.response.userName,
          userEmail:  xhr.response.userEmail
        });
        this.props.dispatch(setUser(xhr.response.userID,xhr.response.userName,xhr.response.userEmail))
      }
    });
    xhr.send();
  }

  /**
   * Render the components.
   */
  render() {
    return (<Dashboard  secretData={this.state.secretData}/>);
  }
}


export default connect()(DashboardPage);
