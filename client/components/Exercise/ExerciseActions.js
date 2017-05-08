import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const ADD_EXERCISES = 'ADD_EXERCISES';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';

let nextExerciseId = 0;
// export const addExercise = (text, numberOfSets) => {
//   return {
//     type: 'ADD_EXERCISE',
//     id:   nextExerciseId++,
//     numberOfSets: numberOfSets,
//     text
//   }
// };

// Export Actions
export function addExercise(text, exercise) {
  return {
    type: ADD_EXERCISE,
    id:   nextExerciseId++,
    text,
  };
}

export function addExerciseRequest(exercise) {
  return (dispatch) => {
    return callApi('exercise', 'POST', {
      exercise: {
        name: exercise.name,
      }
    }).then(res => dispatch(addExercise(res.exercise)));
  };
}

export function addExercises(exercises) {
  return {
    type: ADD_EXERCISES,
    exercises,
  };
}

export function fetchExercises() {
  return (dispatch) => {
    return callApi('exercise').then(res => dispatch(addExercises(res.exercises)));
  };
}

export function deleteExercise(id) {
  return {
    type: DELETE_EXERCISE,
    id,
  };
}

export function deleteExerciseRequest(id) {
  return (dispatch) => {
    return callApi(`exercises/${id}`, 'delete').then(() => dispatch(deleteExercise(id)));
  };
}
