import { SET_MAXES } from './StatsActions';

// Initial State
const initialState = {
  userSquats: [],
  userBench: [],
  userDeadlifts: [],
};

const StatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAXES: {
      return {
        ...state,
        userSquats: action.maxes.userSquats,
        userBench: action.maxes.userBench,
        userDeadlifts: action.maxes.userDeadlifts,
      };
    }
    default:
      return state;
  }
};

/* Selectors */
export const getUserMaxSquats = state => {
  if (typeof state.maxes.userSquats !== 'undefined') {
    return state.maxes.userSquats;
  }
};

export const getUserMaxBench = state => {
  if (typeof state.maxes.userBench !== 'undefined') {
    return state.maxes.userBench;
  }
};

export const getUserMaxDeadlifts = state => {
  if (typeof state.maxes.userDeadlifts !== 'undefined') {
    return state.maxes.userDeadlifts;
  }
};

export const getUser1RMSquats = state => {
  if (typeof state.maxes.userSquats !== 'undefined') {
    return state.maxes.userSquats[0];
  }
};

export const getUser1RMBench = state => {
  if (typeof state.maxes.userBench !== 'undefined') {
    return state.maxes.userBench[0];
  }
};

export const getUser1RMDeadlifts = state => {
  if (typeof state.maxes.userDeadlifts !== 'undefined') {
    return state.maxes.userDeadlifts[0];
  }
};

// Export Reducer
export default StatsReducer;
