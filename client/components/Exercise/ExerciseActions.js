import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const ADD_EXERCISES = 'ADD_EXERCISES';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';

// Export Actions
export function addExercise(exercise) {
  return {
    type: ADD_EXERCISE,
    exercise,
  };
}

export function addExercises(exercises) {
  return {
    type: ADD_EXERCISES,
    exercises,
  };
}

export function addExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi('workouts/exercise', 'POST', {
      exercise: {
        title: exercise.title,
        workoutCUID: exercise.cuid
      }
    }).then(res => dispatch(addExercise(res.exercise)));
  };
}

export function fetchExercises(cuid) {
  return (dispatch) => {
    return callApi(`workouts/exercise/${cuid}`).then(res => dispatch(addExercises(res.exercises)));
  };
}

export function deleteExercise(cuid) {
  return {
    type: DELETE_EXERCISE,
    cuid,
  };
}

export function deleteExerciseRequest(cuid) {
  return (dispatch) => {
    return callApi(`workouts/exercise/${cuid}`, 'delete').then(() => dispatch(deleteExercise(cuid)));
  };
}
