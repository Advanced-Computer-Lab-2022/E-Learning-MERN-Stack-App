const express = require('express');
const {signin, viewMyCourses,} = require('../controller/orgGuest');
const {requireSignin, changePassword, addVideoNote} = require('../commonMiddleWare');
const router = express.Router();

// posts
router.post('/orgGuest/signin', signin);
router.post('/orgGuest/signin', signin);
router.post('/orgGuest/changePassword',requireSignin, changePassword);
router.post('/orgGuest/addVideoNote',requireSignin, addVideoNote);


// gets
router.get('/orgGuest/viewMyCourses',requireSignin, viewMyCourses);
module.exports = router;


