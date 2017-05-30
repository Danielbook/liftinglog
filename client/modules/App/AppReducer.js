// Import Actions
import {SET_USER, REMOVE_USER, TOGGLE_SIDEBAR} from "./AppActions";

// Initial State
const initialState = {
  user:        {
    userID: '',
    userName: '',
    userEmail: '',
  },
  sidebarOpen: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case REMOVE_USER:
      return {
        ...state,
        user: {
          userID:    '',
          userName:  '',
          userEmail: ''
        },
      };

    default:
      return state;
  }
};

/* Selectors */
export const getUserName = state => state.app.user.userName;
export const getUserID = state => state.app.user.userID;
export const getSidebarOpen = state => state.app.sidebarOpen;

// Export Reducer
export default AppReducer;
