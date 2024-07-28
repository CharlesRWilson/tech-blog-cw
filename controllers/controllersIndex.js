const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const commentRouter = require('./commentRoutes.js');
const postRouter = require('./postRoutes.js');
const userRouter = require('./userRoutes.js');

router.use('/commentRoutes.js', commentRouter);
router.use('/userRoutes.js', userRouter);
router.use('/postRoutes.js', postRouter);

module.exports = router;