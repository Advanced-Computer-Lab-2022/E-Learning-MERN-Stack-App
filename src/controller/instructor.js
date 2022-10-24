const Instructor = require('../models/instructor');
const jwt = require('jsonwebtoken');
exports.signup = (req, res) => {
    Instructor.findOne({email: req.body.email})
   .exec((error, instructor) => {
       if(instructor) return res.status(400).json({
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
       const _instructor = new OrgGuest({
           firstName,
           lastName,
           userName: Math.random().toString(),
           email,
           password,
           gender,
           role:'instructor'
       });
       _instructor.save((error, data) => {
           if(error){
           return res.status(400).json({
               message: 'Something went wrong'
           });
       }
       if(data){
           return res.status(201).json({
               message:'User created  successfuly..!'
           })
       }
    });
       
   });
}

exports.signin = (req, res) => {
    Instructor.findOne({email: req.body.email})
    .exec((error, instructor) =>{
        if(error) return res.status(400).json({error});
        if(instructor){
            if(instructor.authenticate(req.body.password)){
                const token = jwt.sign({_id:instructor._id, role: instructor.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const{_id, firstName, lastName, fullName, email, gender, role} = instructor;
                res.status(200).json({
                    token,
                    instructor: {_id, firstName, lastName, fullName, email, gender, role}
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
