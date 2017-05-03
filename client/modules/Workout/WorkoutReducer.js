import { ADD_WORKOUT, ADD_WORKOUTS, DELETE_WORKOUT } from './WorkoutActions';

// Initial State
const initialState = { data: [] };

const WorkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKOUT :
      return {
        data: [action.workout, ...state.data],
      };

    case ADD_WORKOUTS :
      return {
        data: action.workouts,
      };

    case DELETE_WORKOUT :
      return {
        data: state.data.filter(workout => workout.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all workouts
export const getWorkouts = state => state.workouts.data;

// Get workout by cuid
export const getWorkout = (state, cuid) => state.workouts.data.filter(workout => workout.cuid === cuid)[0];

// Export Reducer
export default WorkoutReducer;
