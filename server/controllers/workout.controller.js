import Workout from "../models/workout";
import Exercise from "../models/exercise";
import Set from "../models/set";
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
  Workout.where('userID', req.session.currentUserID).find().sort('-date').exec((err, workouts) => {
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

  const newWorkout = new Workout(req.body.workout);

  // Let's sanitize inputs
  newWorkout.title = sanitizeHtml(newWorkout.title);
  newWorkout.slug = slug(newWorkout.title.toLowerCase(), {lowercase: true});
  newWorkout.cuid = cuid();
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
  Workout.findOne({cuid: req.params.cuid}).exec((err, workout) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({workout});
  });
}

/**
 * Delete a c
 * @param req
 * @param res
 * @returns void
 */
export function deleteWorkout(req, res) {
  Workout
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

export function addExercise(req, res) {
  if (!req.body.exercise.title) {
    res.status(403).end();
  }

  const newExercise = new Exercise(req.body.exercise);

  // Let's sanitize inputs
  newExercise.title = sanitizeHtml(newExercise.title);
  newExercise.cuid = cuid();
  newExercise.sets = [];

  newExercise.save((err, saved) => {
    if (err) res.status(500).send(err);

    Workout
      .findOneAndUpdate(
        {cuid: req.body.exercise.workoutCUID},
        {$push: {exercises: newExercise._id}},
        {upsert: true, new: true},
        function (err, data) {
          if (err) console.log(err);
        });

    res.json({exercise: saved});
  });
}

export function getExercises(req, res) {
  Workout
    .findOne({cuid: req.params.cuid})
    .populate('exercises')
    .exec((err, workout) => {
      if (err) res.status(500).send(err);
      const exercises = workout.exercises;
      res.json({exercises});
    });
}

export function deleteExercise(req, res) {
  Exercise
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

export function addSet(req, res) {
  if (!req.body.set.exerciseCUID) {
    res.status(403).end();
  }

  const newSet = new Set();
  newSet.exerciseCUID = req.body.set.exerciseCUID;
  newSet.cuid = cuid();

  newSet.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    Exercise
      .findOneAndUpdate(
        {cuid: req.body.set.exerciseCUID},
        {$push: {sets: newSet._id}},
        {upsert: true, new: true},
        function (err, data) {
          if (err) console.log(err);
        });

    res.json({set: saved});
  });
}

export function deleteSet(req, res) {
  Set
    .findOne({cuid: req.params.cuid})
    .exec((err, set) => {
      if (err) {
        res.status(500).send(err);
      }
      set.remove(() => {
        res.status(200).end();
      });
    });
}

export function getSets(req, res) {
  Exercise
    .findOne({cuid: req.params.cuid})
    .populate('sets')
    .exec((err, exercise) => {
      if (err) res.status(500).send(err);
      const sets = exercise.sets;
      res.json({sets});
    });
}
