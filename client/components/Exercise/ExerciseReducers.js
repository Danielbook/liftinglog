import {ADD_EXERCISE, ADD_EXERCISES, DELETE_EXERICSE} from "./ExerciseActions";

// Initial State
const initialState = {data: []};

const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXERCISE :
      return {
        data: [action.exercise, ...state.data],
      };

    case ADD_EXERCISES :
      return {
        data: action.exercises,
      };

    case DELETE_EXERICSE :
      return {
        data: state.data.filter(exercise => exercise.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all workouts
export const getExercises = state => state.exercises.data;

// export const getExercises = (state, cuid) => state.exercises.data.filter(workout => {
//   if(workout.cuid === cuid) {
//     return workout.exercises;
//   }
// })[0];

// Export Reducer
export default ExerciseReducer;
