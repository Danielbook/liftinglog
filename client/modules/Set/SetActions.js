import callApi from "../../util/apiCaller";
import {fetchWorkouts} from "../Workout/WorkoutActions";

export function addSetRequest(set) {
  return (dispatch) => {
    return callApi('set', 'POST', {
      set: {
        exerciseCUID: set.cuid
      }
    }).then(() => dispatch(fetchWorkouts()));
  };
}

export function updateSet({set}) {
  return (dispatch) => {
    return callApi(`set`, 'PUT', {
      set: set
    }).then(() => dispatch(fetchWorkouts()));
  }
}

export function deleteSetRequest(set) {
  console.log(set);
  return (dispatch) => {
    return callApi(`set`, 'delete', {
      set: set
    }).then(() => dispatch(fetchWorkouts()));
  };
}
