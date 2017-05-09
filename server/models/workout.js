import mongoose from "mongoose";
const Schema = mongoose.Schema;
var Exercise = require('./exercise');

const workoutSchema = new Schema({
  title:     {type: 'String', required: true},
  cuid:      {type: 'String', required: true},
  slug:      {type: 'String', required: true},
  userID:    {type: 'String', required: true},
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  date:      {type: 'Date', default: Date.now, required: true},
});

export default mongoose.model('Workout', workoutSchema);
