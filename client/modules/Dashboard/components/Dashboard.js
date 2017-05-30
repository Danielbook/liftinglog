import React, {Component} from "react";
import {connect} from "react-redux";
import {getUser, setUser} from "../../App/AppActions";
import DashboardPage from "../pages/DashboardPage";
import {getUserName} from "../../App/AppReducer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (<DashboardPage userName={this.props.userName}/>);
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userName: getUserName(state),
  };
}

export default connect(mapStateToProps)(Dashboard);
