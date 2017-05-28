import {WorkoutModel} from "../models/workout";
import {SetModel} from "../models/set";
import cuid from "cuid";

//TODO Do these in a more efficient way

export function addSet(req, res) {
  if (!req.body.set.exerciseCUID) {
    res.status(403).end();
  }

  const newSet = new SetModel(req.body.set);
  newSet.cuid = cuid();

  WorkoutModel
    .findOne({'exercises.cuid': req.body.set.exerciseCUID},)
    .exec(function (err, workout) {
      if (err) res.status(500).send(err);
      for (let i = 0; i < workout.exercises.length; i++) {
        if (workout.exercises[i].cuid === req.body.set.exerciseCUID) {
          workout.exercises[i].sets.push(newSet);
          workout.save(function (err) {
            if (err) res.status(500).send(err);
          });
        }
      }
    });
  res.status(200).end()
}

// TODO Remove the correct set, now the first set is removed
export function deleteSet(req, res) {
  if (!req.body.set) {
    res.status(403).end();
  }

  WorkoutModel
    .findOne({'exercises.cuid': req.body.set.exerciseCUID})
    .exec(function (err, workout) {
      if (err) res.status(500).send(err);
      for (let i = 0; i < workout.exercises.length; i++) {
        for (let j = 0; j < workout.exercises[i].sets.length; j++) {
          if (workout.exercises[i].sets[j].cuid === req.body.set.cuid) {
            workout.exercises[i].sets.splice(j, 1);
            workout.save(function (err) {
              if (err) res.status(500).send(err);
            });
            res.status(200).end()
          }
        }
      }
    });
}

