const Admin = require('../../models/admin');
const OrgGuest = require('../../models/orgGuest');
const Instructor = require('../../models/instructor');

const jwt = require('jsonwebtoken');


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
};

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
         if(guest) return res.status(400).json({message: "Guest already registered"});
         const _guest = new OrgGuest ({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            company : req.body.company,
            gender: req.body.gender,
            country: req.body.country,
            });
            _guest.save((err, data) => {
            if(err) return res.status(400).json({message: "Something went wrong"});
            if(data) return res.status(201).json({message: "User was added successfuly...!"});
        });
        });
    
};

exports.addInstructor = (req, res) => {
    Instructor.findOne({email: req.body.email})
    .exec((error, instructor) => {
        if(instructor) return res.status(400).json({message: "Instructor already registered"});
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
           if(data) return res.status(201).json({message: "Instructor was added successfuly...!"});
        });
    });
           
   
};










