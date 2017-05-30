import React, {Component} from "react";
import {connect} from "react-redux";
import Auth from "../../../components/Auth/Auth";
import {setUser} from "../../App/AppActions";
import DashboardPage from "../pages/DashboardPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID:     '',
      userName:   '',
      userEmail:  ''
    };
  }

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
          userID:     xhr.response.userID,
          userName:   xhr.response.userName,
          userEmail:  xhr.response.userEmail
        });
        this.props.dispatch(setUser(xhr.response.userID, xhr.response.userName, xhr.response.userEmail))
      }
    });
    xhr.send();
  }

  render() {
    return (<DashboardPage userName={this.state.userName}/>);
  }
}

export default connect()(Dashboard);
