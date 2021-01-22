// what the user sees

const path = require('path');

// import controllers
const userController = require('../controllers/user');

const express = require('express');

const router = express.Router();

router.get('/', userController.getIndex);

module.exports = router;