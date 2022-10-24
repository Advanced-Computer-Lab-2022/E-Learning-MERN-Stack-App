const OrgGuest = require('../models/orgGuest');
const jwt = require('jsonwebtoken');
exports.signup = (req, res) => {
    OrgGuest.findOne({email: req.body.email})
   .exec((error, orgGuest) => {
       if(orgGuest) return res.status(400).json({
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
       const _orgGuest = new OrgGuest({
           firstName,
           lastName,
           userName: Math.random().toString(),
           email,
           password,
           gender,
           role:'corpTrainee'
       });
       _orgGuest.save((error, data) => {
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
    OrgGuest.findOne({email: req.body.email})
    .exec((error, orgGuest) =>{
        if(error) return res.status(400).json({error});
        if(orgGuest){
            if(orgGuest.authenticate(req.body.password)){
                const token = jwt.sign({_id:orgGuest._id, role: orgGuest.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const{_id, firstName, lastName, fullName, email, gender, role} = orgGuest;
                res.status(200).json({
                    token,
                    orgGuest: {_id, firstName, lastName, fullName, email, gender, role}
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
