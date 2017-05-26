import callApi from "../../util/apiCaller";
import {fetchWorkouts} from "../Workout/WorkoutActions";

// Export Constants
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const ADD_EXERCISES = 'ADD_EXERCISES';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';

// Export Actions
export function addExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi('exercise', 'POST', {
      exercise: {
        title: exercise.title,
        workoutCUID: exercise.cuid
      }
    }).then(() => dispatch(fetchWorkouts()));
  };
}

export function deleteExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi(`exercise`, 'delete', {
      exercise: exercise
    }).then(() => dispatch(fetchWorkouts()));
  };
}
