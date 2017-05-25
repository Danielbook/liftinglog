import mongoose from "mongoose";
const Schema = mongoose.Schema;
import {ExerciseSchema} from './exercise';

export const WorkoutSchema = new Schema({
  title:     {type: 'String', required: true},
  cuid:      {type: 'String', required: true},
  slug:      {type: 'String', required: true},
  userID:    {type: 'String', required: true},
  exercises: [ExerciseSchema],
  date:      {type: 'Date', default: Date.now, required: true},
});

export const WorkoutModel = mongoose.model('Workout', WorkoutSchema);
