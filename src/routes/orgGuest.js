const express = require('express');
const {signin, viewMyCourses,} = require('../controller/orgGuest');
const {requireSignin} = require('../commonMiddleWare');
const router = express.Router();

// posts
router.post('/orgGuest/signin', signin);
router.post('/orgGuest/signin', signin);
//router.post('/guest/changePassword', changePassword);


// gets
router.get('/orgGuest/viewMyCourses',requireSignin, viewMyCourses);
module.exports = router;


