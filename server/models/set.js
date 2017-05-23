import mongoose from "mongoose";
const Schema = mongoose.Schema;

const setSchema = new Schema({
  weight:       {type: 'Number', required: true, default: 0},
  reps:         {type: 'Number', required: true, default: 0},
  rpe:          {type: 'Number', required: true, default: 0},
  exerciseCUID: {type: 'String', required: true},
});

export default mongoose.model('Set', setSchema);
