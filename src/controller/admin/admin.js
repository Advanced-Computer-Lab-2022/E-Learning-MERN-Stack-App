const Guest  = require("../../models/guest");
const OrgGuest  = require("../../models/orgGuest");
const Instructor  = require("../../models/instructor");
const  Admin  = require("../../models/admin");
const AdminCourseRequests = require("../../models/adminCourseRequests");
const jwt = require('jsonwebtoken');
const Course = require("../../models/course");



exports.isAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({message: 'Access Denied'});
    }
    next();
};
exports.signup = (req, res) => {
    Admin.findOne({email: req.body.email})
   .exec((error, admin) => {
       if(admin) return res.status(400).json({
           message: 'User already registered' 
       });

       const _admin = new Admin({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           userName: req.body.userName,
           email: req.body.email,
           password: req.body.password,
           country: req.body.country,
           gender: req.body.gender
       });
       _admin.save((error, data) => {
           if(error){
           return res.status(400).json({
             message: 'Something went wrong'
           });
       }
       if(data){
           return res.status(201).json({
               message:'Admin created  successfuly..!'
           })
       }
    });

   });
}

exports.signin = (req, res) => {
    Admin.findOne({userName: req.body.userName})
    .exec(async(error, admin) => {
        if(error) return res.status(400).json({error});
        if(admin) {
            const passwordVerify = await admin.authenticate(req.body.password);
            if(passwordVerify){
                const token = jwt.sign({_id:admin._id, role: admin.role, userName: admin.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                const{_id, firstName, lastName, userName, email, role, gender} = admin;
                res.status(200).json({
                    token,
                    admin: {_id, firstName, lastName, userName, email, gender, role}
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

exports.addOrgGuest = (req, res) => {
    OrgGuest.findOne({email: req.body.email})
    .exec((error, guest) => {
         if(guest) res.status(400).json({message: "Guest already registered"});
        });
        const _guest = new OrgGuest ({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            company: company._id,
            userName: req.body.userName,
            gender: req.body.gender,
            country: req.body.country,
            });
            _guest.save((err, data)=> {
            if(err) res.status(400).json({message: "Something went wrong"});
            if(data) res.status(201).json({message: "User was added successfuly...!"});
        });
    }
    exports.addInstructor = (req, res) => {
        Instructor.findOne({email: req.body.email})
        .exec((error, instructor) => {
            if(instructor) return res.status(400).json({message: "Instructor already registered"});
            if(error) return res.status(400).json({message: "error"});
            else {
                const _instructor = new Instructor({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    userName: req.body.userName,
                    gender: req.body.gender,
                    country: req.body.country,
                });
                _instructor.save((error, data) => {
                    if(error) return  res.status(400).json({message: "Something went wrong"});
                   if(data) return  res.status(201).json({message: "Instructor was added successfuly...!"});
                });
            }
        })
    }
        

exports.viewAllCourseRequests = (req, res) => {
    AdminCourseRequests.find()
    .exec((error, requests) => {
        if(error) return res.status(400).json({
            message: 'an error occured' 
        });
        if(requests) return res.status(200).json({requests});
    });
}
exports.setSelectedPromotions = (req, res) => {
    let courses = req.body.courses;
    for(let i=0; i<courses.length; i++) {
        Course.findOneAndUpdate({_id: courses[i].courseId, discount:{state:false}},
             {discount:{value:courses[i].value, endDate:courses[i].endDate, state:true}})
             .exec((error, updated) => {
                 if(error) return res.status(400).json({message: "error happened"});
             });
    }
    return res.status(200).json({message:"Offer added successfuly"});
}
exports.setPromotionsOnAll = (req, res) => {
        Course.updateMany({discount:{state:false}},
             {discount:{value:req.body.value, endDate:req.body.endDate, state:true}})
            .exec((error, updated) => {
                 if(error) return res.status(400).json({message: "error happened"});
                 if(updated) return res.status(200).json({message:"Offer added successfuly"});
             });
}
exports.removePromotions = (req, res) => {
    Course.updateMany({discount:{state:true, endDate:req.body.endDate}},
         {discount:{value:0, state:false}})
    .exec((error, removed) => {
        if(error) return res.status(400).json({message: "error happened"});
        if(removed) return res.status(200).json({message:"error removed"});

    });
}










