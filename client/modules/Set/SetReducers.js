import {ADD_SET, ADD_SETS, DELETE_SET} from "./SetActions";

// Initial State
const initialState = {data: []};

const SetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SET :
      return {
        data: [action.sets, ...state.data],
      };

    case ADD_SETS :
      return {
        data: action.sets,
      };

    case DELETE_SET :
      return {
        data: state.data.filter(set => set.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all workouts
export const getSets = state => state.sets.data;

// Export Reducer
export default SetReducer;
