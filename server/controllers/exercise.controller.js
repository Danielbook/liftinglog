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
}

export function getExercises(req, res) {
  WorkoutModel
    .findOne({cuid: req.params.cuid})
    .populate('exercises')
    .exec((err, workout) => {
      if (err) res.status(500).send(err);
      const exercises = workout.exercises;
      res.json({exercises});
    });
}

export function deleteExercise(req, res) {
  ExerciseModel
    .findOne({cuid: req.params.cuid})
    .exec((err, exercise) => {
      if (err) {
        res.status(500).send(err);
      }
      exercise.remove(() => {
        res.status(200).end();
      });
    });
}
