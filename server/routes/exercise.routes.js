const express = require('express');
import * as WorkoutController from '../controllers/workout.controller';
import * as ExerciseController from '../controllers/exercise.controller';
import * as SetController from '../controllers/set.controller';

const router = new express.Router();

// Add a new exercise for the workout
router.route('/exercise').post(ExerciseController.addExercise);

// Get one workouts' exercises
router.route('/exercise/:cuid').get(ExerciseController.getExercises);

// Delete an exercise by cuid
router.route('/exercise/:cuid').delete(ExerciseController.deleteExercise);

module.exports = router;
