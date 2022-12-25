const   Guest  = require("../../models/guest");
const   Instructor  = require("../../models/instructor");
const  OrgGuest  = require('../../models/orgGuest');
const  Admin  = require("../../models/admin");
const jwt = require('jsonwebtoken');


exports.isAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({message: 'Access Denied'});
    }
    next();

};
exports.signup = async (req, res) => {
    var user = await Guest.findOne({ userName: req.body.userName });
    if (user){
        return res.status(400).send("Username already registered");
    }else{
        user = await OrgGuest.findOne({ userName: req.body.userName });
        if(user){
            return res.status(400).send("Username already registered");
        }else{
            user = await Instructor.findOne({ userName: req.body.userName });
            if(user){
                return res.status(400).send("Username already registered");
            }else{
                user = await Admin.findOne({ userName: req.body.userName });
                if(user){
                    return res.status(400).send("Username already registered");
                }else{
                    user = await Guest.findOne({ email: req.body.email });
                    if(user){
                        return res.status(400).send("email already registered");
                    }else{
                        user = await OrgGuest.findOne({ email: req.body.email });
                        if(user){
                            return res.status(400).send("email already registered");
                        }else{
                            user = await Instructor.findOne({ email: req.body.email });
                            if(user){
                                return res.status(400).send("email already registered");
                            }else{
                                user = await Admin.findOne({ email: req.body.email });
                                if(user){
                                    return res.status(400).send("email already registered");
                                }else{
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

exports.signin = (req, res) => {
    Admin.findOne({userName: req.body.userName})
    .exec(async(error, admin) =>{
        if(error) return res.status(400).json({error});
        if(admin) {
            const passwordVerify = await admin.authenticate(req.body.password);
            if(passwordVerify){
                const token = jwt.sign({_id:admin._id, role: admin.role, userName: admin.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
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

exports.addOrgGuest = async (req, res) => {
    var user = await Guest.findOne({ userName: req.body.userName });
    if (user){
        return res.status(400).send("Username already registered");
    }else{
        user = await OrgGuest.findOne({ userName: req.body.userName });
        if(user){
            return res.status(400).send("Username already registered");
        }else{
            user = await Instructor.findOne({ userName: req.body.userName });
            if(user){
                return res.status(400).send("Username already registered");
            }else{
                user = await Admin.findOne({ userName: req.body.userName });
                if(user){
                    return res.status(400).send("Username already registered");
                }else{
                    user = await Guest.findOne({ email: req.body.email });
                    if(user){
                        return res.status(400).send("email already registered");
                    }else{
                        user = await OrgGuest.findOne({ email: req.body.email });
                        if(user){
                            return res.status(400).send("email already registered");
                        }else{
                            user = await Instructor.findOne({ email: req.body.email });
                            if(user){
                                return res.status(400).send("email already registered");
                            }else{
                                user = await Admin.findOne({ email: req.body.email });
                                if(user){
                                    return res.status(400).send("email already registered");
                                }else{
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

exports.addInstructor = async (req, res) => {
    var user = await Guest.findOne({ userName: req.body.userName });
    if (user){
        return res.status(400).send("Username already registered");
    }else{
        user = await OrgGuest.findOne({ userName: req.body.userName });
        if(user){
            return res.status(400).send("Username already registered");
        }else{
            user = await Instructor.findOne({ userName: req.body.userName });
            if(user){
                return res.status(400).send("Username already registered");
            }else{
                user = await Admin.findOne({ userName: req.body.userName });
                if(user){
                    return res.status(400).send("Username already registered");
                }else{
                    user = await Guest.findOne({ email: req.body.email });
                    if(user){
                        return res.status(400).send("email already registered");
                    }else{
                        user = await OrgGuest.findOne({ email: req.body.email });
                        if(user){
                            return res.status(400).send("email already registered");
                        }else{
                            user = await Instructor.findOne({ email: req.body.email });
                            if(user){
                                return res.status(400).send("email already registered");
                            }else{
                                user = await Admin.findOne({ email: req.body.email });
                                if(user){
                                    return res.status(400).send("email already registered");
                                }else{
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
                            }
                        }
                    }
                }
            }
        }
    }
};










