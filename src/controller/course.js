const Guest = require('../models/guest');
const Course = require('../models/course');
const multer = require('multer');
const shortid = require('shortid');


exports.viewMyCourses = (req, res) => {
    Guest.findOne({_id: req.body._id})
    .exec((error, guest) => {
        if(error) return res.status(400).json({error});
        if(guest){
            res.status(200).json(guest.courses);
        }
    });

};
exports.getCourses = (req, res) => {
    Course.find()
    .exec((error, course) => {
        if(error) return res.status(400).json({error});
        if(guest){
            res.status(200).json({course});
        }
    });

};