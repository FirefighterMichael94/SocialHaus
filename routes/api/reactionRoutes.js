const express = require('express');
const router = express.Router();
const reactionController = require('../../controllers/reactionController');


// POST a reaction to a thought
router.post('/:thoughtId/reactions', reactionController.addReaction);

// DELETE a reaction from a thought by its reactionId
router.delete('/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);

module.exports = router;
