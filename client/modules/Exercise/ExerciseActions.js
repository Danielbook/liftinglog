import callApi from '../../util/apiCaller';
import { fetchWorkouts } from '../Workout/WorkoutActions';

// Export Actions
export function addExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi('exercise', 'POST', {
      exercise: {
        title: exercise.title,
        workoutCUID: exercise.cuid,
      },
    }).then(() => dispatch(fetchWorkouts()));
  };
}

export function deleteExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi('exercise', 'delete', {
      exercise,
    }).then(() => dispatch(fetchWorkouts()));
  };
}
