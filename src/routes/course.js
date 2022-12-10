  const express = require('express');
  const { requireSignin } = require('../commonMiddleWare');
  const {viewMyCourses, getCourses} = require('../controller/course');
  const router = express.Router();
  
  router.get('/viewMyCourses',requireSignin, viewMyCourses);
  router.get('/getCourses', getCourses);

 module.exports = router;












