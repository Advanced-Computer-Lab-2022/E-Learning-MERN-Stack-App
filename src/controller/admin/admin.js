const Admin = require('../../models/admin');
const OrgGuest = require('../../models/orgGuest');
const Instructor = require('../../models/instructor');
const Category = require('../../models/category');
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
    .exec((error, admin) =>{
        if(error) return res.status(400).json({error});
        if(admin) {
            if(admin.authenticate(req.body.password)){
                const token = jwt.sign({_id:admin._id, role: admin.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
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
};

exports.addInstructor = (req, res) => {
    Instructor.findOne({email: req.body.email})
    .exec((error, instructor) =>{
        if(instructor) res.status(400).json({message: "Instructor already registered"});
        else{
            const _instructor = new Instructor({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                userName: req.body.userName,
                gender: req.body.gender,
                country: req.body.country,
            });
            _instructor.save((error, data)=>{
                if(error) res.status(400).json({message: "Something went wrong"});
               if(data) res.status(201).json({message: "Instructor was added successfuly...!"});
            });
        }
    })
};

//categories//////////////////////////////////////////////////////////////////////////////////////





exports.addCategory = (req, res) => {
     const catObj = {
         name:req.body.name,
        };
if(req.body.parentId){
    catObj.parentId = req.body.parentId;
}
const cat = new Category(catObj);
cat.save((error, category) => {
    if(error)return res.status(400).json({error});
    if(category)return res.status(200).json({category});
});

};



