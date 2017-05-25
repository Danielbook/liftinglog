const express = require('express');
import * as WorkoutController from "../controllers/workout.controller";

const router = new express.Router();

// Get all workouts
router.route('/workouts').get(WorkoutController.getWorkouts);

// Get one workout by cuid
router.route('/workouts/:cuid').get(WorkoutController.getWorkout);

// Add a new workout
router.route('/workouts').post(WorkoutController.addWorkout);

// Delete a workout by cuid
router.route('/workouts/:cuid').delete(WorkoutController.deleteWorkout);

module.exports = router;
