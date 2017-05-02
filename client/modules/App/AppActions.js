// Export Constants
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Export Actions
export function setUser(userID, userName, userEmail) {
  return {
    type: SET_USER,
    userID,
    userName,
    userEmail
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
