
const express = require('express');
const router = express.Router();
const controller = require('../controller/loginController')
router.post('/login',controller.login)
router.get('/test',controller.test)
module.exports = router