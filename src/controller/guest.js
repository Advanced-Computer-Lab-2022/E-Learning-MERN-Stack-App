const   Guest  = require("../models/guest");
const   Instructor  = require("../models/instructor");
const  OrgGuest  = require('../models/orgGuest');
const  Admin  = require("../models/admin");
const jwt = require('jsonwebtoken');
const Course = require('../models/course');


exports.signup = (req, res) => {
    Guest.findOne({email: req.body.email})
   .exec((error, guest) => {
    if(error) return res.status(400).json({
        message: 'an error occured' 
    });

    if(guest) return res.status(400).json({
        message: 'User already registered' 
    });

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
    if(data) {
         return res.status(200).json({message: 'user added successfuly'});
    }
 });

});
}






exports.signin = (req, res) => {
    Guest.findOne({userName: req.body.userName})
    .exec(async(error, guest) =>{
        if(error) return res.status(400).json({error});
        if(guest){
            const passwordVerify = await guest.authenticate(req.body.password);
            if(passwordVerify){
                const token = jwt.sign({_id:guest._id, role: guest.role, userName: guest.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                return res.status(200).json({
                    token,
                    guest
                });

            }
            else{
                return res.status(400).json({
                    message: 'Invalid password'

                });
            }
        }
        else return res.status(400).json({message: 'something went wrong'});

    });
};


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



