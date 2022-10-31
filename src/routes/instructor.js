const express = require('express');
const {signin, createCourse, isInstructor} = require('../controller/instructor');
const {requireSignin} = require('../commonMiddleWare/index');
const router = express.Router();

router.post('/instructor/signin', signin);
 router.post('/instructor/createCourse',requireSignin, isInstructor, createCourse);

module.exports = router;