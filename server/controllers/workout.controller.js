import { WorkoutModel } from '../models/workout';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all workout
 * @param req
 * @param res
 * @returns void
 */
export function getWorkouts(req, res) {
  WorkoutModel
    .where('userID', req.session.currentUserID)
    .find()
    .sort('-date')
    .exec((err, workouts) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ workouts });
    });
}

export function getOneRepMaxes(req, res) {
  let userSquats = 0;
  let userBench = 0;
  let userDeadlifts = 0;


  WorkoutModel
    .where('userID', req.session.currentUserID)
    .find()
    .exec((err, workouts) => {
      if (err) {
        res.status(500).send(err);
      }
      for (let i = 0; i < workouts.length; i++) {
        for (let j = 0; j < workouts[i].exercises.length; j++) {
          if (workouts[i].exercises[j].title.toUpperCase() === 'SQUATS') {
            for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
              if (workouts[i].exercises[j].sets[k].reps === 1 && workouts[i].exercises[j].sets[k].weight > userSquats) {
                userSquats = workouts[i].exercises[j].sets[k].weight;
              }
            }
          } else if (workouts[i].exercises[j].title.toUpperCase() === 'DEADLIFTS') {
            for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
              if (workouts[i].exercises[j].sets[k].reps === 1 && workouts[i].exercises[j].sets[k].weight > userDeadlifts) {
                userDeadlifts = workouts[i].exercises[j].sets[k].weight;
              }
            }
          } else if (workouts[i].exercises[j].title.toUpperCase() === 'BENCH PRESS') {
            for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
              if (workouts[i].exercises[j].sets[k].reps === 1 && workouts[i].exercises[j].sets[k].weight > userBench) {
                userBench = workouts[i].exercises[j].sets[k].weight;
              }
            }
          }
        }
      }
        // console.log(
        //   "Squat: ", userSquats,
        //   "Bench: ", userBench,
        //   "Deadlifts: ", userDeadlifts,
        // );
      res.json({ maxes: { userSquats, userBench, userDeadlifts } });
    }
    );
}


export function getRepMaxes(req, res) {
  let userSquats = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
  let userBench = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
  let userDeadlifts = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);


  WorkoutModel
    .where('userID', req.session.currentUserID)
    .find()
    .exec((err, workouts) => {
      if (err) {
        res.status(500).send(err);
      }
      for (let n = 1; n <= 10; n++) {
        for (let i = 0; i < workouts.length; i++) {
          for (let j = 0; j < workouts[i].exercises.length; j++) {
            if (workouts[i].exercises[j].title.toUpperCase() === 'SQUATS') {
              for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
                if (workouts[i].exercises[j].sets[k].reps === n && workouts[i].exercises[j].sets[k].weight > userSquats[n - 1]) {
                  userSquats[n - 1] = workouts[i].exercises[j].sets[k].weight;
                }
              }
            } else if (workouts[i].exercises[j].title.toUpperCase() === 'DEADLIFTS') {
              for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
                if (workouts[i].exercises[j].sets[k].reps === n && workouts[i].exercises[j].sets[k].weight > userDeadlifts[n - 1]) {
                  userDeadlifts[n - 1] = workouts[i].exercises[j].sets[k].weight;
                }
              }
            } else if (workouts[i].exercises[j].title.toUpperCase() === 'BENCH PRESS') {
              for (let k = 0; k < workouts[i].exercises[j].sets.length; k++) {
                if (workouts[i].exercises[j].sets[k].reps === n && workouts[i].exercises[j].sets[k].weight > userBench[n - 1]) {
                  userBench[n - 1] = workouts[i].exercises[j].sets[k].weight;
                }
              }
            }
          }
        }
      }

      res.json({ maxes: { userSquats, userBench, userDeadlifts } });
    }
    );
}

/**
 * Save a workout
 * @param req
 * @param res
 * @returns void
 */
export function addWorkout(req, res) {
  if (!req.body.workout.title) {
    res.status(403).end();
  }

  const newWorkout = new WorkoutModel(req.body.workout);

  // Let's sanitize inputs
  newWorkout.title = sanitizeHtml(newWorkout.title);
  newWorkout.slug = slug(newWorkout.title.toLowerCase(), { lowercase: true });
  newWorkout.cuid = cuid();
  newWorkout.date = Date.now();
  newWorkout.userID = sanitizeHtml(newWorkout.userID);

  newWorkout.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ workout: saved });
  });
}

/**
 * Get a single workout
 * @param req
 * @param res
 * @returns void
 */
export function getWorkout(req, res) {
  WorkoutModel.findOne({ cuid: req.params.cuid }).exec((err, workout) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ workout });
  });
}

export function updateWorkout(req, res) {
  if (!req.body.newValue) {
    res.status(403).end();
  }

  WorkoutModel
    .findOneAndUpdate(
      { cuid: req.params.cuid },
    {
      $set: {
        title: req.body.newValue,
        slug: slug(req.body.newValue.toLowerCase(), { lowercase: true }),
      },
    }
    ).exec((err, workout) => {
      if (err) res.status(500).send(err);
      res.status(200).end();
    });
}

/**
 * Delete a c
 * @param req
 * @param res
 * @returns void
 */
export function deleteWorkout(req, res) {
  WorkoutModel
    .findOne({ cuid: req.params.cuid })
    .exec((err, workout) => {
      if (err) {
        res.status(500).send(err);
      }

      workout.remove(() => {
        res.status(200).end();
      });
    });
}

