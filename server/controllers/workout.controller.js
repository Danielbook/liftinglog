import Workout from "../models/workout";
import Exercise from "../models/exercise";
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



  // Workout
  //   .findOne({cuid: req.body.exercise.workoutCUID})
  //   .populate('exercises')
  //   .exec((err, workout) => {
  //     if (err) res.status(500).send(err);
  //     console.log(workout);
  //     // workout.exercises.push(newExercise);
  //     // workout.save( (err, saved) => {
  //     //   if (err) res.status(500).send(err);
  //     //   res.json({exercise: saved.exercises});
  //     // });
  //   });

  Workout
    .findOneAndUpdate(
      {cuid: req.body.exercise.workoutCUID},
      {$push: {exercises: newExercise}},
      {upsert: true, new: true},
      function (err, data) {
        if (err) console.log(err);
        // console.log("Data: " + data);
      });

    // console.log("New exercise:    " + saved);
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
      // console.log("Exercises:     " + exercises);
      // let exercises = workout.exercises;
      res.json({exercises});
    });
}


export function deleteExercise(req, res) {

}
