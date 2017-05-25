import mongoose from "mongoose";
import {SetSchema} from "./set";
const Schema = mongoose.Schema;

export const ExerciseSchema = new Schema({
  title: {type: 'String', required: true},
  cuid: {type: 'String', required: true},
  workoutCUID: {type: 'String', required: true},
  sets: [SetSchema],
});

export const ExerciseModel = mongoose.model('Exercise', ExerciseSchema);
