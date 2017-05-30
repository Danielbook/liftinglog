import React, {Component} from "react";
import {connect} from "react-redux";
import {getUser, getMaxes} from "../../App/AppActions";
import DashboardPage from "../pages/DashboardPage";
import {getUserName, getUserMaxes} from "../../App/AppReducer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(getMaxes());
  }

  render() {
    return (<DashboardPage userName={this.props.userName} userMaxes={this.props.userMaxes}/>);
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userName: getUserName(state),
    userMaxes: getUserMaxes(state),
  };
}

export default connect(mapStateToProps)(Dashboard);
