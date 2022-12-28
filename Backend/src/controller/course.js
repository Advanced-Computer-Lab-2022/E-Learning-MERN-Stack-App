const Guest = require('../models/guest');
const Course = require('../models/course');
const multer = require('multer');
const shortid = require('shortid');



exports.getCourses = (req, res) => {
    Course.find()
    .exec((error, courses) => {
        if(error) return res.status(400).json({error});
        if(courses){
            res.status(200).json({courses});
        }
    });

};