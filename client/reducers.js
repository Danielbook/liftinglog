/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import exercises from './modules/Exercise/ExerciseReducers';
import workouts from './modules/Workout/WorkoutReducers';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  exercises,
  workouts,
  intl,
});
