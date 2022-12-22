const express = require('express');
const {signin, createCourse, isInstructor, getCourses} = require('../controller/instructor');
const {requireSignin, changePassword} = require('../commonMiddleWare/index');
const router = express.Router();

router.post('/instructor/signin', signin);
router.post('/instructor/createCourse',requireSignin, isInstructor, createCourse);
router.get('/instructor/getCourses',requireSignin, isInstructor, getCourses);
router.get('/instructor/changePassword',requireSignin, changePassword);
module.exports = router;