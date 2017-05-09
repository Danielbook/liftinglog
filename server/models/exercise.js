import mongoose from "mongoose";
const Schema = mongoose.Schema;
var Workout = require('./workout');

const exerciseSchema = new Schema({
  title:       {type: 'String', required: true},
  cuid:        {type: 'String', required: true},
  workoutCUID: {type: 'String', required: true},
  sets:        {type: 'Array', "default": [], required: true}
});

export default mongoose.model('Exercise', exerciseSchema);
