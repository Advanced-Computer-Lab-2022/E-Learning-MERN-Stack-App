const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');
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
}

exports.signin = (req, res) => {
    Admin.findOne({email: req.body.email})
    .exec((error, admin) =>{
        if(error) return res.status(400).json({error});
        if(admin){
            if(admin.authenticate(req.body.password)){
                const token = jwt.sign({_id:admin._id, role: admin.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
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
}
