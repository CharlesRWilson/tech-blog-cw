// // Import just the router express
// const router = require('express').Router();
// // Import the index.js from 'api' folder
// const userRoutes = require('./api/userRoutes');

// router.use('/', homeRoutes);
// router.use('/api/users', userRoutes);

// module.exports = router;

const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
