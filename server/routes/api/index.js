const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);


//module export
module.exports = router;