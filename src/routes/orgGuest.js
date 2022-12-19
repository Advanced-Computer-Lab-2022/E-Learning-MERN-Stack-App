const express = require('express');
const {signin, viewMyCourses} = require('../controller/orgGuest');
const { requireSignin } = require('../commonMiddleWare');
const router = express.Router();

// posts
router.post('/orgGuest/signin', signin);
module.exports = router;

// gets
router.get('/orgGuest/viewMyCourses',requireSignin, viewMyCourses);


