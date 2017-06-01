/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import workouts from './modules/Workout/WorkoutReducer';
import maxes from './modules/Stats/StatsReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  workouts,
  maxes,
});
