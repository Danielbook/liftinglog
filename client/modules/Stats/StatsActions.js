import callApi from '../../util/apiCaller';

export const SET_MAXES = 'SET_USER_MAXES';

// Export Actions
export function setMaxes(maxes) {
  return {
    type: SET_MAXES,
    maxes,
  };
}

export function getMaxes() {
  return (dispatch) => {
    return callApi('workouts/repmax').then(res => dispatch(setMaxes(res.maxes)));
  };
}
