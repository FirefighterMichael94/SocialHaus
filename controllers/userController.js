const { User, Thought, Reaction } = require('../models');


module.exports = {
  // Controller function to fetch all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      if(!user) {
        return res.status(404).json({ message: 'no Users found'});
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get users', error: error.message });
    }
  },

  // Controller function to fetch a single user by _id with populated thought and friend data
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get user', error: error.message });
    }
  },

  // Controller function to create a new user
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.create({ username, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
  },

  // Controller function to update a user by _id
  updateUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { username, email },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
  },

  // Controller function to delete a user by _id
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Remove user's associated thoughts
      await Thought.deleteMany({ username: deletedUser.username });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
  },

  // Controller function to add a new friend to a user's friend list
  addFriend: async (req, res) => {
    try {
      const { friendId } = req.params;
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add friend', error: error.message });
    }
  },

  // Controller function to remove a friend from a user's friend list
  removeFriend: async (req, res) => {
    try {
      const { friendId } = req.params;
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove friend', error: error.message });
    }
  }
};
