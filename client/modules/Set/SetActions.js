import callApi from '../../util/apiCaller';
import {fetchWorkouts} from "../Workout/WorkoutActions";

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

export function addSetRequest(set) {
  return (dispatch) => {
    return callApi('set', 'POST', {
      set: {
        exerciseCUID: set.cuid
      }
    }).then(() => dispatch(fetchWorkouts()));
  };
}

export function deleteSetRequest(set) {
  console.log(set);
  return (dispatch) => {
    return callApi(`set`, 'delete', {
      set: set
    }).then(() => dispatch(fetchWorkouts()));
  };
}
