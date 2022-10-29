const OrgGuest = require('../models/orgGuest');
const jwt = require('jsonwebtoken');

exports.signin = (req, res) => {
    OrgGuest.findOne({email: req.body.email})
    .exec((error, orgGuest) =>{
        if(error) return res.status(400).json({error});
        if(orgGuest){
            if(orgGuest.authenticate(req.body.password)){
                const token = jwt.sign({_id:orgGuest._id, role: orgGuest.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
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
