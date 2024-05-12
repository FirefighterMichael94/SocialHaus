const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes.js');
const userRoutes = require('./userRoutes.js');
const reactionRoutes = require('./reactionRoutes.js')

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;
