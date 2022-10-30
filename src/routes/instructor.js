const express = require('express');
const {signin} = require('../controller/instructor');
const {requireSignin, isInstructor} = require('../commonMiddleWare/index');
const router = express.Router();

router.post('/instructor/signin', signin);
// router.post('/instructor/createCourse',requireSignin, isInstructor, createCourse);

module.exports = router;