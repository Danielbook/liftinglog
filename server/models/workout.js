import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title:  {type: 'String', required: true},
  cuid:   {type: 'String', required: true},
  slug:   {type: 'String', required: true},
  userID: {type: 'String', required: true},
  date:   {type: 'Date', default: Date.now, required: true},
});

export default mongoose.model('Workout', postSchema);
