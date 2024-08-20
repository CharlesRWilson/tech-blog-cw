const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const commentRouter = require('./commentRoutes');
const postRouter = require('./postRoutes');
const userRouter = require('./userRoutes');

router.use('/commentRoutes.js', commentRouter);
router.use('/userRoutes.js', userRouter);
router.use('/postRoutes.js', postRouter);

module.exports = router;