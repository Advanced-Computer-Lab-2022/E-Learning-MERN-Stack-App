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
exports.addVideoNote = (req, res) => {
    const note = req.body.note;
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if(user.role == "individualTrainee"){
        Guest.findOne({userName: user.userName})
        .exec ((error, guest) => {
            if(error) return res.status(400).json({error});
            if(guest) {
                const key = guest.watching.videoId;
                Guest.findOneAndUpdate({userName:user.userName},{$set:{notes:{key,note}}})
                .exec((error, result) => {
                    if(error) return res.status(400).json({error});
                    if(result) return res.status(201).josn({mesage:"note added"});
                })
            }

        });
        
    }
    else if(user.role == "CorprateTrainee") {
        OrgGuest.findOne({userName: user.userName})
        .exec ((error, orgGuest) => {
            if(error) return res.status(400).json({error});
            if(orgGuest) {
                const key = orgGuest.watching.videoId;
                Guest.findOneAndUpdate({userName:user.userName},{$set:{notes:{key,note}}})
                .exec((error, result) => {
                    if(error) return res.status(400).json({error});
                    if(result) return res.status(201).josn({mesage:"note added"});
                })
            }

        });
   } 
}

exports.editBio = (req, res) => {
    const oldToken = req.headers.authorization;
    const user = jwt.verify(oldToken, process.env.JWT_SECRET);
    const _userName = req.body.userName;
    const _country = req.body.country;
    const _email = req.body.email;
    const _firstName = req.body.firstName;
    const _lastName = req.body.lastName;
    const _password = req.body.password;
    let _bio;
    if(user.role == "instructor") {
        _bio = req.body.bio;
        Insrtuctor.findByIdAndUpdate({userName:user.userName},
             {userName:_userName},
             {email:_email},
             {password:_password},
             {firstName:_firstName},
             {lastName:_lastName},
             {country:_country},
             {bio:_bio})
             .exec((error, instructor) => {
                if(error) return res.status(400).json({error});
                else if(instructor) {
                    const token = jwt.sign({_id:instructor._id, role: instructor.role, userName: instructor.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                    return res.status(200).json({message:"info edited successfuly"});

                }
             });
    }
    else if(user.role == "admin") {
        Admin.findByIdAndUpdate({userName:user.userName},
            {userName:_userName},
            {email:_email},
            {password:_password},
            {firstName:_firstName},
            {lastName:_lastName},
            {country:_country})
            .exec((error, admin) => {
               if(error) return res.status(400).json({error});
               else if(admin) {
                   const token = jwt.sign({_id:admin._id, role: admin.role, userName: admin.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                   return res.status(200).json({message:"info edited successfuly"});

               }
            });

    }
    else if(user.role == "normalTrainee") {
        Guest.findByIdAndUpdate({userName:user.userName},
            {userName:_userName},
            {email:_email},
            {password:_password},
            {firstName:_firstName},
            {lastName:_lastName},
            {country:_country})
            .exec((error, guest) => {
               if(error) return res.status(400).json({error});
               else if(guest) {
                   const token = jwt.sign({_id:guest._id, role: guest.role, userName: guest.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                   return res.status(200).json({message:"info edited successfuly"});

               }
            });

    }
    else if(user.role == "corprateTrainee") {
        OrgGuest.findByIdAndUpdate({userName:user.userName},
            {userName:_userName},
            {email:_email},
            {password:_password},
            {firstName:_firstName},
            {lastName:_lastName},
            {country:_country})
            .exec((error, orgGuest) => {
               if(error) return res.status(400).json({error});
               else if(orgGuest) {
                   const token = jwt.sign({_id:orgGuest._id, role: orgGuest.role, userName: orgGuest.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                   return res.status(200).json({message:"info edited successfuly"});

               }
            });

    }
}

