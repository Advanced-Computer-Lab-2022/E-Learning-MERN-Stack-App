const Instructor = require('../models/instructor');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');

exports.isInstructor = (req, res, next) => {
    if(req.user.role !== 'instructor'){
        return res.status(400).json({message: 'Access Denied'});
    }
    next();

};

exports.createCourse = (req, res) => {
    const _course = new Course({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        shortVideo:req.body.shortVideo,
        price: req.body.price,
        createdBy: req.user.userName,
        category: req.body.category,
        chapters: req.body.chapters
        
      });
      _course.save((error, course) => {
          if(error) res.status(400).json({message:"an error occured"});
          if(course) res.status(201).json({message: "course created successfuly...!"});
        });
};

exports.getCourses = (req, res) => {
    Course.find({createdBy: req.user.userName})
        .exec((error, course) => {
            if(error) res.status(400).json({message:"an error occured"});
            if(course) res.status(200).json(course);
        });
}
