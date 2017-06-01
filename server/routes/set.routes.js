const express = require('express');
import * as SetController from '../controllers/set.controller';

const router = new express.Router();

// Add a new set
router.route('/set').post(SetController.addSet);

// Update a set
router.route('/set').put(SetController.updateSet);

// Delete a set
router.route('/set').delete(SetController.deleteSet);

module.exports = router;
