const { Thought, User } = require('../models');

const thoughtController = {
  getAllThought: async (req, res) => {
    try {
      const thought = await Thought.find().populate('reactions');
      res.json(thought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get thoughts', error: error.message });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId).populate('reactions');
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get thought', error: error.message });
    }
  },

  createThought: async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
      const thought = await Thought.create({ thoughtText, username });
      await User.findByIdAndUpdate(username, { $push: { thoughts: thought._id } });
      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create thought', error: error.message });
    }
  },

  updateThought: async (req, res) => {
    try {
      const { thoughtText } = req.body;
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, { thoughtText }, { new: true });
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update thought', error: error.message });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete thought', error: error.message });
    }
  },

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

module.exports = thoughtController;
