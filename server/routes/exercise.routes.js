const express = require('express');
import * as ExerciseController from "../controllers/exercise.controller";

const router = new express.Router();

// Add a new exercise for the workout
router.route('/exercise').post(ExerciseController.addExercise);

// Delete an exercise by cuid
router.route('/exercise').delete(ExerciseController.deleteExercise);

module.exports = router;
