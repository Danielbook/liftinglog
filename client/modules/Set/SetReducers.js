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
        data: state.data.filter(set => set.id !== action.id),
      };

    default:
      return state;
  }
};

// Export Reducer
export default SetReducer;
