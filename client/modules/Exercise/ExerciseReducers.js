import {ADD_EXERCISE, ADD_EXERCISES, DELETE_EXERCISE} from "./ExerciseActions";

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

    case DELETE_EXERCISE :
      return {
        data: state.data.filter(exercise => exercise.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

// Export Reducer
export default ExerciseReducer;
