const express = require('express');
import * as WorkoutController from '../controllers/workout.controller';

const router = new express.Router();

// Get all workouts
router.route('/workouts').get(WorkoutController.getWorkouts);

// Get one workout by cuid
router.route('/workouts/:cuid').get(WorkoutController.getWorkout);

// Add a new workout
router.route('/workouts').post(WorkoutController.addWorkout);

// Delete a workout by cuid
router.route('/workouts/:cuid').delete(WorkoutController.deleteWorkout);

// Add a new exercise for the workout
router.route('/workouts/exercise').post(WorkoutController.addExercise);


// Get one workouts' exercises
router.route('/workouts/exercise/:cuid').get(WorkoutController.getExercises);

// Delete an exercise by cuid
router.route('/workouts/exercise/:cuid').delete(WorkoutController.deleteExercise);


// Add a new set
router.route('/workouts/set').post(WorkoutController.addSet);

// Delete a set
router.route('/workouts/set/:cuid').delete(WorkoutController.deleteSet);

module.exports = router;
