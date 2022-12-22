const jwt = require("jsonwebtoken");
const Guest = require('../models/guest');
const OrgGuest = require('../models/orgGuest');
const Insrtuctor = require('../models/instructor');
const Course = require('../models/course');
exports.requireSignin = (req, res, next) => {
    if(req.headers.authorization){
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    }
    else{
        return res.status(400).json({message: 'Athorization Required'});
    }
    next();
}
// exports.signout = (req, res) => {
    
// }
exports.changePassword = (req, res) => {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if(user.role == "corporateTrainee"){
        OrgGuest.findOneAndUpdate({email: req.body.email}, {password:req.body.password})
        .exec((error, result) => {
            if(error) return res.status(400).json({error});
            if(result) res.status(200).json({message:"password changed successfuly"});
        });
    }
        else if(user.role == "instructor"){
            Insrtuctor.findOneAndUpdate({email: req.body.email}, {password:req.body.password})
            .exec((error, result) => {
                if(error) return res.status(400).json({error});
                if(result) res.status(200).json({message:"password changed successfuly"});
            });
        }
}

