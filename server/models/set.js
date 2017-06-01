import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const SetSchema = new Schema({
  weight: { type: 'Number', required: true, default: 0 },
  cuid: { type: 'String', required: true },
  reps: { type: 'Number', required: true, default: 0 },
  rpe: { type: 'Number', required: true, default: 5.5 },
  exerciseCUID: { type: 'String', required: true },
});

export const SetModel = mongoose.model('Set', SetSchema);
