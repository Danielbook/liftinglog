import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import WorkoutList from "../../components/WorkoutList";
import {addWorkoutRequest, deleteWorkoutRequest, fetchWorkouts} from "../../WorkoutActions";
import {getWorkouts} from "../../WorkoutReducer";
import AddWorkout from "../../components/AddWorkout/AddWorkout";
import {getUserID} from "../../../App/AppReducer";
import Divider from "material-ui/Divider";
import {Row} from "react-flexbox-grid";

class WorkoutListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  handleDeleteWorkout = workout => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteWorkoutRequest(workout));
    }
  };

  handleAddWorkout = (title) => {
    let userID = this.props.userID;
    this.props.dispatch(addWorkoutRequest({title, userID}));
  };

  render() {
    return (
      <div>
        <h1>Workouts</h1>
        <Divider/>
        <Row style={{paddingBottom: 40}}>
          <AddWorkout addWorkout={this.handleAddWorkout}/>
        </Row>

        <Row>
          <WorkoutList handleDeleteWorkout={this.handleDeleteWorkout} workouts={this.props.workouts}/>
        </Row>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
WorkoutListPage.need = [() => {
  return fetchWorkouts();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userID:   getUserID(state),
    workouts: getWorkouts(state),
  };
}

WorkoutListPage.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

WorkoutListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(WorkoutListPage);
