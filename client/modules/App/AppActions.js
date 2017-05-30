import callApi from '../../util/apiCaller';

// Export Constants
export const SET_USER = 'SET_USER';
export const SET_MAXES = 'SET_USER_MAXES';
export const REMOVE_USER = 'REMOVE_USER';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Export Actions
export function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

// Export Actions
export function setMaxes(maxes) {
  return {
    type: SET_MAXES,
    maxes
  };
}

export function getUser() {
  return (dispatch) => {
    return callApi('dashboard').then(res => dispatch(setUser(res.user)));
  };
}

export function getMaxes() {
  return (dispatch) => {
    return callApi('workouts/onerepmax').then(res => dispatch(setMaxes(res.maxes)));
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER,
  };
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}
