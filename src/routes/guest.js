const express = require('express');
const { requireSignin } = require('../commonMiddleWare');
const {viewMyCourses} = require('../controller/guest');
const { signup, signin} = require('../controller/guest');
const router = express.Router();


// posts
router.post('/guest/signup', signup);
router.post('/guest/signin', signin);


//gets
router.get('/guest/viewMyCourses', requireSignin, viewMyCourses);





 module.exports = router;



















