const Guest = require("../models/guest");
const   Instructor  = require("../models/instructor");
const  OrgGuest  = require("../models/orgGuest");
const  Admin  = require("../models/admin");
const jwt = require('jsonwebtoken');
const express = require("express");
const { fileURLToPath } = require("url");
const router = express.Router();

router.post("/", async (req, res) => {
    var user = await Guest.findOne({ userName: req.body.userName });
    if (user){
        const passwordVerify = await user.authenticate(req.body.password);
        if(passwordVerify){
            const token = jwt.sign({_id:user._id, role: user.role, userName: user.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
            return res.status(200).json({
                token,
                user
            });
        }else{
            return res.status(400).json({
                message: 'Invalid password'

            });
        }
    }else{
        user = await OrgGuest.findOne({ userName: req.body.userName });
        if(user){
            const passwordVerify = await user.authenticate(req.body.password);
        if(passwordVerify){
            const token = jwt.sign({_id:user._id, role: user.role, userName: user.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
            return res.status(200).json({
                token,
                user
            });
        }else{
            return res.status(400).json({
                message: 'Invalid password'

            });
        }
        }else{
            user = await Instructor.findOne({ userName: req.body.userName });
            if(user){
                const passwordVerify = await user.authenticate(req.body.password);
        if(passwordVerify){
            const token = jwt.sign({_id:user._id, role: user.role, userName: user.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
            return res.status(200).json({
                token,
                user
            });
        }else{
            return res.status(400).json({
                message: 'Invalid password'

            });
        }
            }else{
                user = await Admin.findOne({ userName: req.body.userName });
                if(user){
                    const passwordVerify = await user.authenticate(req.body.password);
        if(passwordVerify){
            const token = jwt.sign({_id:user._id, role: user.role, userName: user.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
            return res.status(200).json({
                token,
                user
            });
        }else{
            return res.status(400).json({
                message: 'Invalid password'

            });
        }
                }else{         
                    return res.status(400).json({
                        message: 'Invalid Username not found'
                    });
                    }
            
            }
        }
    }
});
    
module.exports = router;