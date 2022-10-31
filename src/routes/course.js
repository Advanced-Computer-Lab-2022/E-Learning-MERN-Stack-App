  const express = require('express');
  const {getCourse} = require('../controller/course');
  const router = express.Router();
  
  router.get('/getCourse',getCourse);



 module.exports = router;
/*
addinng a course through through the database for now until Instructor.addcourse works











*/