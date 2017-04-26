import Workout from '../models/post';
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
  Workout.find().sort('-dateAdded').exec((err, workouts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ workouts });
  });
}

/**
 * Save a workout
 * @param req
 * @param res
 * @returns void
 */
export function addWorkout(req, res) {
  if (!req.body.workout.name) {
    res.status(403).end();
  }

  const newWorkout = new Workout(req.body.workout);

  // Let's sanitize inputs
  newWorkout.title = sanitizeHtml(newWorkout.title);
  newWorkout.slug = slug(newWorkout.title.toLowerCase(), { lowercase: true });
  newWorkout.cuid = cuid();
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
  Workout.findOne({ cuid: req.params.cuid }).exec((err, workout) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ workout });
  });
}

/**
 * Delete a c
 * @param req
 * @param res
 * @returns void
 */
export function deleteWorkout(req, res) {
  Workout.findOne({ cuid: req.params.cuid }).exec((err, workout) => {
    if (err) {
      res.status(500).send(err);
    }

    workout.remove(() => {
      res.status(200).end();
    });
  });
}
