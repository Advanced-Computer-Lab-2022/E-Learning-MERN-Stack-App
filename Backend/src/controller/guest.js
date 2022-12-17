const Guest = require('../models/guest');
const jwt = require('jsonwebtoken');
exports.signup = (req, res) => {
    Guest.findOne({email: req.body.email})
   .exec((error, guest) => {
       if(guest) return res.status(400).json({
           message: 'User already registered' 
       });
       const {
           firstName, 
           lastName,
           email,
           password,
           gender
       } = req.body;
       const _guest = new Guest({
           firstName,
           lastName,
           userName: Math.random().toString(),
           email,
           password,
           gender,
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
                const{_id, firstName, lastName, fullName, email, gender, role} = guest;
                res.status(200).json({
                    token,
                    guest: {_id, firstName, lastName, fullName, email, gender, role}
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
exports.logout = async (req, res) => {
    try{ 
        res.cookie('jwt',"");
        res.status (200).json("you are logged out")
    }catch (error){
        res. status (406).json({ error: error.messages });
    }
}

;
