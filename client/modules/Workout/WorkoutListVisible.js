/**
 * Created by Daniel on 2017-04-12.
 */
import {connect} from "react-redux";
import {goToWorkout} from "./WorkoutActions";
import WorkoutList from "./WorkoutList";

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWorkoutClick: (id) => {
      dispatch(goToWorkout(id))
    }
  }
};

const WorkoutListVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList);

export default WorkoutListVisible
