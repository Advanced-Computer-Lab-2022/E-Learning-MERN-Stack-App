  const express = require('express');
  const { requireSignin } = require('../commonMiddleWare');
  const {getCourses} = require('../controller/course');
  const router = express.Router();
  
  router.get('/getCourses', getCourses);

 module.exports = router;












