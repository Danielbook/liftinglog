/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import exercises from './components/Exercise/ExerciseReducers';
import sets from './components/Set/SetReducers';
import workouts from './modules/Workout/WorkoutReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  exercises,
  workouts,
  sets,
  intl,
});
