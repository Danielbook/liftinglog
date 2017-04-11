// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { TOGGLE_SIDEBAR } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  sidebarOpen: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        ...state,
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

export const getsidebarOpen = state => state.app.sidebarOpen;

// Export Reducer
export default AppReducer;
