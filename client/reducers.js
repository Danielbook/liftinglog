/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import exercises from './modules/Exercise/ExerciseReducers';
import workouts from './modules/Workout/WorkoutReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  exercises,
  workouts,
});
