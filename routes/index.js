const express = require('express');
const loginRouter = require('./login');
const router = express.Router();
router.use('/api',loginRouter);
module.exports = router;
