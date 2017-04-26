import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_WORKOUT = 'ADD_WORKOUT';
export const ADD_WORKOUTS = 'ADD_WORKOUTS';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';

// Export Actions
export function addWorkout(workout) {
  return {
    type: ADD_WORKOUT,
    workout,
  };
}

export function addWorkoutRequest(workout) {
  return (dispatch) => {
    return callApi('workouts', 'workout', {
      workout: {
        name: workout.name,
      },
    }).then(res => dispatch(addWorkout(res.workout)));
  };
}

export function addWorkouts(workouts) {
  return {
    type: ADD_WORKOUTS,
    workouts,
  };
}

export function fetchWorkouts() {
  return (dispatch) => {
    return callApi('workouts').then(res => {
      dispatch(addWorkouts(res.workouts));
    });
  };
}

export function fetchWorkout(cuid) {
  return (dispatch) => {
    return callApi(`workouts/${cuid}`).then(res => dispatch(addWorkout(res.workout)));
  };
}

export function deleteWorkout(cuid) {
  return {
    type: DELETE_WORKOUT,
    cuid,
  };
}

export function deleteWorkoutRequest(cuid) {
  return (dispatch) => {
    return callApi(`workouts/${cuid}`, 'delete').then(() => dispatch(deleteWorkout(cuid)));
  };
}
