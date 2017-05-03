/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import exercises from './components/Exercise/ExerciseReducers';
import sets from './components/Set/SetReducers';
import workouts from './modules/Workout/WorkoutReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  exercises,
  workouts,
  sets,
});
