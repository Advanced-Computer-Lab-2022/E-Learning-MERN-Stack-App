  const express = require('express');
  const { requireSignin } = require('../commonMiddleWare');
  const {viewMyCourses} = require('../controller/course');
  const router = express.Router();
  
  router.get('/viewMyCourses',requireSignin, viewMyCourses);

 module.exports = router;












