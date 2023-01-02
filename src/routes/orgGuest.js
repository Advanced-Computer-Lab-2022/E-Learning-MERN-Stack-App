const express = require('express');
const {signin, viewMyCourses, requestCourse, viewMyCourseRequests} = require('../controller/orgGuest');
const {requireSignin, changePassword, addVideoNote, editInfo, issueProblem} = require('../commonMiddleWare');
const router = express.Router();

// posts
router.post('/orgGuest/signin', signin);
router.post('/orgGuest/signin', signin);
router.post('/orgGuest/changePassword',requireSignin, changePassword);
router.post('/orgGuest/addVideoNote',requireSignin, addVideoNote);
router.post('/orgGuest/editInfo', requireSignin, editInfo);
router.post('/orgGuest/requestCourse', requireSignin, requestCourse );
router.post('/orgGuest/issueProblem', requireSignin, issueProblem);
// gets
router.get('/orgGuest/viewMyCourseRequests', requireSignin, viewMyCourseRequests);
router.get('/orgGuest/viewMyCourses',requireSignin, viewMyCourses);
module.exports = router;


