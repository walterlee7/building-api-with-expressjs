const express = require('express');
const chirpsRouter = require('./chirps');
const app = require
let router = express.Router();

router.use('/chirps', chirpsRouter);

module.exports = router;