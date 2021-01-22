// what the user sees

const path = require('path');

// import controllers

// third party packages
const express = require('express');

const router = express.Router();

router.get('/admin', (req, res, next) => {
    res.write('<h1>YO YO!</h1>');
    res.end();
})

module.exports = router;