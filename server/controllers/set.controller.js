import {WorkoutModel} from "../models/workout";
import {SetModel} from "../models/set";
import cuid from "cuid";

export function addSet(req, res) {
  if (!req.body.set.exerciseCUID) {
    res.status(403).end();
  }

  const newSet = new SetModel(req.body.set);
  newSet.cuid = cuid();

  WorkoutModel
    .findOne({'exercises.cuid': req.body.set.exerciseCUID})
    .exec(function (err, workout) {
      if (err) res.status(500).send(err);
      for (let i = 0; i < workout.exercises.length; i++) {
        if (workout.exercises[i].cuid === req.body.set.exerciseCUID) {
          workout.exercises[i].sets.push(newSet);
          workout.save(function (err) {
            if (err) res.status(500).send(err);
            console.log('Successfully added set!');
          });
        }
      }
    });
}

export function deleteSet(req, res) {

}

export function getSets(req, res) {

}
