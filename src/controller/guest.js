const Guest = require('../models/guest');
const jwt = require('jsonwebtoken');
exports.signup = (req, res) => {
    Guest.findOne({email: req.body.email})
   .exec((error, guest) => {
       if(guest) return res.status(400).json({
           message: 'User already registered' 
       });

       const _guest = new Guest({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           userName: Math.random().toString(),
           email: req.body.email,
           password: req.body.password
 
       });
       _guest.save((error, data) => {
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
    Guest.findOne({email: req.body.email})
    .exec((error, guest) =>{
        if(error) return res.status(400).json({error});
        if(guest){
            if(guest.authenticate(req.body.password)){
                const token = jwt.sign({_id:guest._id, role: guest.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
                res.status(200).json({
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
