/**
 * Created by Daniel on 2017-04-12.
 */
import {connect} from "react-redux";
import {toggleExercise} from "./ExerciseActions";
import ExerciseList from "./ExerciseList";

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onExerciseClick: (id) => {
      dispatch(toggleExercise(id))
    }
  }
};

const ExerciseListVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);

export default ExerciseListVisible
