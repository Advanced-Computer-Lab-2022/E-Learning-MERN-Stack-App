const Admin = require('../../models/admin');
const Company = require('../../models/company');
const OrgGuest = require('../../models/orgGuest');
const Instructor = require('../../models/instructor');
const jwt = require('jsonwebtoken');
const { restart } = require('nodemon');


exports.signup = (req, res) => {
    Admin.findOne({email: req.body.email})
   .exec((error, admin) => {
       if(admin) return res.status(400).json({
           message: 'User already registered' 
       });
       const {
           firstName, 
           lastName,
           userName,
           email,
           password,
           gender
       } = req.body;
       const _admin = new Admin({
           firstName,
           lastName,
           userName: Math.random().toString(),
           email,
           password,
           gender,
           role:'admin'
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
    Admin.findOne({email: req.body.email})
    .exec((error, admin) =>{
        if(error) return res.status(400).json({error});
        if(admin){
            if(admin.authenticate(req.body.password)){
                const token = jwt.sign({_id:admin._id, role: admin.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
                const{_id, firstName, lastName, fullName, email, role, gender} = admin;
                res.status(200).json({
                    token,
                    admin: {_id, firstName, lastName, fullName, email, gender, role}
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

exports.logout = async (req, res) => {
    try{ 
        res.cookie('jwt',"");
        res.status (200).json("you are logged out")
    }catch (error){
        res. status (406).json({ error: error.messages });
    }
}

exports.addCompany = (req, res) => {
    Company.findOne({email: req.body.email})
    .exec((error, company) =>{
        if(company) restart.status(400).json({message: "Company already registered"});
        else{
            const _comapny = new Company({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            _comapny.save((error, data)=>{
                if(error) res.status(400).json({message: "Something went wrong"});
               if(data) res.status(201).json({message: "Company was added successfuly...!"});
            });
        }
    })
};
exports.addOrgGuest = (req, res) => {
    OrgGuest.findOne({email: req.body.email})
    .exec((error, guest) => {
         if(guest) restart.status(400).json({message: "Guest already registered"});
         Company.findOne({email: req.body.companyEmail}).
         exec((error, company) =>{
             if(!company) res.status(403).json({message: "Access denied, company not registered"});
             else{
                 const _guest = new OrgGuest({
                     email: req.body.email,
                     password: req.body.password,
                     firstName: req.body.firstName,
                     lastName: req.body.LastName,
                     company: req.body.company,
                     userName: Math.random().toString(),

                  


                 });

                 _guest.save((error, data)=>{
                    if(error) res.status(400).json({message: "Something went wrong"});
                   if(data) res.status(201).json({message: "User was added successfuly...!"});
                });
             }
         })
        
    });

};
exports.addInstructor = (req, res) => {
    Company.findOne({email: req.body.email})
    .exec((error, instructor) =>{
        if(instructor) restart.status(400).json({message: "Instructor already registered"});
        else{
            const _instructor = new Instructor({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            _instructor.save((error, data)=>{
                if(error) res.status(400).json({message: "Something went wrong"});
               if(data) res.status(201).json({message: "Instructor was added successfuly...!"});
            });
        }
    })
};
