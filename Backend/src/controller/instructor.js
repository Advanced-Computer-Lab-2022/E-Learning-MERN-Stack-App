const Instructor = require('../models/instructor');
const jwt = require('jsonwebtoken');

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
}


exports.logout = async (req, res) => {
    try{ 
        res.cookie('jwt',"");
        res.status (200).json("you are logged out")
    }catch (error){
        res. status (406).json({ error: error.messages });
    }
};


