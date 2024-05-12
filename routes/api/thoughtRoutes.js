const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', thoughtController.getAllThought);
// GET a single thought by its _id
router.get('/:thoughtId', thoughtController.getThoughtById);

// POST a new thought
router.post('/', thoughtController.createThought);

// PUT to update a thought by its _id
router.put('/:thoughtId', thoughtController.updateThought);

// DELETE a thought by its _id
router.delete('/:thoughtId', thoughtController.deleteThought);

// POST a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.addReaction);

// DELETE a reaction from a thought by its reactionId
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router;
