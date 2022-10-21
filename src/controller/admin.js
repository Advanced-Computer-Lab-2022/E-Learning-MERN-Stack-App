const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

exports.signin = (req, res) => {
    Admin.findOne({email: req.body.email})
    .exec((error, admin) =>{
        if(error) return res.status(400).json({error});
        if(admin){
            if(admin.authenticate(req.body.password)){
                const token = jwt.sign({_id:admin._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const{_id, firstName, lastName, fullName, email, gender} = admin;
                res.status(200).json({
                    token,
                    admin: {_id, firstName, lastName, fullName, email, gender}
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