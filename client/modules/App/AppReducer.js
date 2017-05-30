// Import Actions
import {REMOVE_USER, SET_MAXES, SET_USER, TOGGLE_SIDEBAR} from "./AppActions";

// Initial State
const initialState = {
  user: {
    userID: '',
    userName: '',
    userEmail: '',
  },
  maxes: {
    userSquats: 0,
    userBench: 0,
    userDeadlifts: 0,
  },
  sidebarOpen: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user
      };
    }

    case SET_MAXES: {
      return {
        ...state,
        maxes: action.maxes
      };
    }

    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    }

    case REMOVE_USER:
      return {
        ...state,
        user: {
          userID: '',
          userName: '',
          userEmail: '',
        },
        maxes: {
          userSquats: 0,
          userBench: 0,
          userDeadlifts: 0,
        }
      };

    default:
      return state;
  }
};

/* Selectors */
export const getUserName = state => state.app.user.userName;
export const getUserMaxes = state => state.app.maxes;
export const getUserID = state => state.app.user.userID;
export const getSidebarOpen = state => state.app.sidebarOpen;

// Export Reducer
export default AppReducer;
