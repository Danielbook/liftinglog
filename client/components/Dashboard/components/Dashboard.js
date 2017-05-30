import React, {Component} from "react";
import {connect} from "react-redux";
import {getUser} from "../../../modules/App/AppActions";
import DashboardPage from "../pages/DashboardPage";
import {getMaxes} from "../../../modules/Stats/StatsActions";
import {getUserName} from "../../../modules/App/AppReducer";
import {getUser1RMSquats, getUser1RMBench, getUser1RMDeadlifts} from "../../../modules/Stats/StatsReducer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(getMaxes());
  }

  render() {
    return (
      <DashboardPage
        userName={this.props.userName}
        userSquatMax={this.props.userSquatMax}
        userBenchMax={this.props.userBenchMax}
        userDeadliftMax={this.props.userDeadliftMax}
      />
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userName: getUserName(state),
    userSquatMax: getUser1RMSquats(state),
    userBenchMax: getUser1RMBench(state),
    userDeadliftMax: getUser1RMDeadlifts(state),
  };
}

export default connect(mapStateToProps)(Dashboard);
