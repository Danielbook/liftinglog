const express = require('express');
import * as WorkoutController from "../controllers/workout.controller";

const router = new express.Router();

// Get all workouts
router.route('/workouts').get(WorkoutController.getWorkouts);

// Get users one rep max in the big three
router.route('/workouts/onerepmax').get(WorkoutController.getOneRepMaxes);

// Get users rep maxes 1-10
router.route('/workouts/repmax').get(WorkoutController.getRepMaxes);

// Get one workout by cuid
router.route('/workouts/:cuid').get(WorkoutController.getWorkout);

// Add a new workout
router.route('/workouts').post(WorkoutController.addWorkout);

// Update workout
router.route('/workouts/:cuid').put(WorkoutController.updateWorkout);

// Delete a workout by cuid
router.route('/workouts/:cuid').delete(WorkoutController.deleteWorkout);

module.exports = router;
