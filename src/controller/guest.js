const   Guest  = require("../models/guest");
const   Instructor  = require("../models/instructor");
const  OrgGuest  = require('../models/orgGuest');
const  Admin  = require("../models/admin");
const jwt = require('jsonwebtoken');
const Course = require('../models/course');
const sendEmail = require("../utils/sendEmail");

exports.signup = async (req, res) => {
    var user = await Guest.findOne({ userName: req.body.userName });
    if (user){
        return res.status(400).send("Username already registered");
    }else{
        user = await OrgGuest.findOne({ userName: req.body.userName });
        if(user){
            return res.status(400).send("Username already registered");
        }else{
            user = await Instructor.findOne({ userName: req.body.userName });
            if(user){
                return res.status(400).send("Username already registered");
            }else{
                user = await Admin.findOne({ userName: req.body.userName });
                if(user){
                    return res.status(400).send("Username already registered");
                }else{
                    user = await Guest.findOne({ email: req.body.email });
                    if(user){
                        return res.status(400).send("email already registered");
                    }else{
                        user = await OrgGuest.findOne({ email: req.body.email });
                        if(user){
                            return res.status(400).send("email already registered");
                        }else{
                            user = await Instructor.findOne({ email: req.body.email });
                            if(user){
                                return res.status(400).send("email already registered");
                            }else{
                                user = await Admin.findOne({ email: req.body.email });
                                if(user){
                                    return res.status(400).send("email already registered");
                                }else{
                                    const _guest = new Guest({
                                        firstName: req.body.firstName,
                                        lastName: req.body.lastName,
                                        userName: req.body.userName,
                                        email: req.body.email,
                                        password: req.body.password,
                                        country: req.body.country,
                                        gender: req.body.gender
                              
                                    });
                                    _guest.save((error, data) => {
                                        if(error){
                                        return res.status(400).json({
                                            message: 'Something went wrong'
                                        });
                                    }
                                    if(data){
                                        sendEmail(_guest.email, "Welcome","You Have Signed Up Successfully" );
                                         return res.status(200).json({message: 'user added successfuly'});
                                   
                                    }
                                 });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}


exports.viewMyCourses = (req, res) => {
    let myCourses = [];
    Guest.findOne({_id: req.user._id})
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



