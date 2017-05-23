import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_SET = 'ADD_SET';
export const ADD_SETS = 'ADD_SETS';
export const DELETE_SET = 'DELETE_SET';

// Export Actions
export function addSet(set) {
  return {
    type: ADD_SET,
    set,
  };
}

export function addSets(sets) {
  return {
    type: ADD_SETS,
    sets,
  };
}

export function addSetRequest(set) {
  return (dispatch) => {
    console.log(set);
    return callApi('workouts/set', 'POST', {
      set: {
        exerciseCUID: set.cuid
      }
    }).then(res => dispatch(addSet(res.set)));
  };
}

export function fetchSets(cuid) {
  return (dispatch) => {
    return callApi(`workouts/set/${cuid}`).then(res => dispatch(addSets(res.sets)));
  };
}

export function deleteSet(cuid) {
  return {
    type: DELETE_SET,
    cuid,
  };
}

export function deleteSetRequest(cuid) {
  return (dispatch) => {
    return callApi(`workouts/set/${cuid}`, 'delete').then(() => dispatch(deleteSet(cuid)));
  };
}
