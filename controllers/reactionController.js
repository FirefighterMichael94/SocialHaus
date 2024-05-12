const { Thought } = require('../models');

const reactionController = {
  addReaction: async (req, res) => {
    try {
      const { reactionBody, username } = req.body;
      const newReaction = { reactionBody, username };
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: newReaction } },
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add reaction', error: error.message });
    }
  },

  deleteReaction: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete reaction', error: error.message });
    }
  }
};

module.exports = reactionController;
