const OrgGuest = require('../models/orgGuest');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');




exports.viewMyCourses = (req, res) => {
    let myCourses = [];
    OrgGuest.findOne({_id: req.user._id})
    .exec((error, guest) => {
     if(error) return res.status(400).json({
         message: 'an error occured' 
     });
     if(guest) {
         for(let i=0; i < guest.courses.length; i++) {
             let currCourse = guest.courses[i];
             Course.findById(currCourse)
             .exec((error, course) => {
                if(error) return res.status(400).json({message: 'an error occured'});
                if(course) myCourses.push(course);
             })
         }
         return res.status(200).json({myCourses});
     }
});
}
