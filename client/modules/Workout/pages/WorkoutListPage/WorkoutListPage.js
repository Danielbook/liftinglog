import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkoutList from '../../components/WorkoutList';
import { addWorkoutRequest, fetchWorkouts, deleteWorkoutRequest } from '../../WorkoutActions';
import { getWorkouts } from '../../WorkoutReducer';
import AddWorkout from "../../components/AddWorkout/AddWorkout";

class WorkoutListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  handleDeleteWorkout = workout => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteWorkoutRequest(workout));
    }
  };

  handleAddWorkout = (name) => {
    // this.props.dispatch(toggleAddPost());
    this.props.dispatch(addWorkoutRequest({ name }));
  };

  render() {
    return (
      <div>
        <AddWorkout addWorkout={this.handleAddWorkout} />

        <WorkoutList handleDeleteWorkout={this.handleDeleteWorkout} workouts={this.props.workouts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
WorkoutListPage.need = [() => { return fetchWorkouts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
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
