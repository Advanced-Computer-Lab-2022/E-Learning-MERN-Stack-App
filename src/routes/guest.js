const express = require('express');
const {requireSignin, addVideoNote, editInfo, issueProblem} = require('../commonMiddleWare');
const {viewMyCourses} = require('../controller/guest');
const { signup, signin} = require('../controller/guest');
const router = express.Router();


// posts
router.post('/guest/signup', signup);
router.post('/guest/signin', signin);
router.post('/guest/addVideoNote', requireSignin, addVideoNote);
router.post('/guest/editInfo', requireSignin, editInfo);
router.post('/guest/issueProblem', requireSignin, issueProblem);


//gets
router.get('/guest/viewMyCourses', requireSignin, viewMyCourses);





 module.exports = router;



















