import {WorkoutModel} from "../models/workout";
import {ExerciseModel} from "../models/exercise";
import cuid from "cuid";
import sanitizeHtml from "sanitize-html";

export function addExercise(req, res) {
  if (!req.body.exercise.title) {
    res.status(403).end();
  }

  const newExercise = new ExerciseModel(req.body.exercise);

  // Let's sanitize inputs
  newExercise.title = sanitizeHtml(newExercise.title);
  newExercise.cuid = cuid();
  newExercise.sets = [];

  WorkoutModel
    .findOneAndUpdate(
      {cuid: req.body.exercise.workoutCUID},
      {$push: {exercises: newExercise}},
      {upsert: true, new: true},
      function (err, data) {
        if (err) console.log(err);
      });
  res.json({});
}

export function deleteExercise(req, res) {
  WorkoutModel
    .findOneAndUpdate(
      {cuid: req.body.exercise.workoutCUID},
      {$pull: {exercises: {cuid: req.body.exercise.cuid}}},
      {upsert: true, new: true},
      function (err, data) {
        if (err) console.log(err);
      });
  res.json({});
}
