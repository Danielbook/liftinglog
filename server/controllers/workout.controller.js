import {WorkoutModel} from "../models/workout";
import cuid from "cuid";
import slug from "limax";
import sanitizeHtml from "sanitize-html";

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
      res.json({workouts});
    });
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
  newWorkout.slug = slug(newWorkout.title.toLowerCase(), {lowercase: true});
  newWorkout.cuid = cuid();
  newWorkout.date = Date.now();
  newWorkout.userID = sanitizeHtml(newWorkout.userID);

  newWorkout.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({workout: saved});
  });
}

/**
 * Get a single workout
 * @param req
 * @param res
 * @returns void
 */
export function getWorkout(req, res) {
  WorkoutModel.findOne({cuid: req.params.cuid}).exec((err, workout) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({workout});
  });
}

export function updateWorkout(req, res) {
  if (!req.body.newValue) {
    res.status(403).end();
  }

  if( typeof (req.body.newValue) === 'string') {
    WorkoutModel
      .findOneAndUpdate(
        {cuid: req.params.cuid},
        {$set: {
          title: req.body.newValue,
          slug: slug(req.body.newValue.toLowerCase(), {lowercase: true})
        }}
      ).exec((err, workout) => {
      if (err) res.status(500).send(err);
      res.status(200).end();
    });
  } else if(typeof (req.body.newValue) === Date) {
    WorkoutModel
      .findOneAndUpdate(
        {cuid: req.params.cuid},
        {$set: {
          date: req.body.newValue,
        }}
      ).exec((err, workout) => {
      if (err) res.status(500).send(err);
      res.status(200).end();
    });
  }
}

/**
 * Delete a c
 * @param req
 * @param res
 * @returns void
 */
export function deleteWorkout(req, res) {
  WorkoutModel
    .findOne({cuid: req.params.cuid})
    .exec((err, workout) => {
      if (err) {
        res.status(500).send(err);
      }

      workout.remove(() => {
        res.status(200).end();
      });
    });
}


