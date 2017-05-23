import mongoose from "mongoose";
const Schema = mongoose.Schema;
var Set = require('./set');

const exerciseSchema = new Schema({
  title:       {type: 'String', required: true},
  cuid:        {type: 'String', required: true},
  workoutCUID: {type: 'String', required: true},
  sets: [{type: Schema.Types.ObjectId, ref: 'Set'}],
});

export default mongoose.model('Exercise', exerciseSchema);
