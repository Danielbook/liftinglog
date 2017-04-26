import { Router } from 'express';
import * as WorkoutController from '../controllers/workout.controller';
const router = new Router();

// Get all Posts
router.route('/workouts').get(WorkoutController.getWorkouts);

// Get one post by cuid
router.route('/workouts/:cuid').get(WorkoutController.getWorkout);

// Add a new Post
router.route('/workouts').post(WorkoutController.addWorkout);

// Delete a post by cuid
router.route('/workouts/:cuid').delete(WorkoutController.deleteWorkout);

export default router;
