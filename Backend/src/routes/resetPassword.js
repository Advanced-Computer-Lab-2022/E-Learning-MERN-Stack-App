


const Guest = require("../models/guest");
const   Instructor  = require("../models/instructor");
const  OrgGuest  = require("../models/orgGuest");
const  Admin  = require("../models/admin");
const Token = require("../models/forgetPasswordToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const { fileURLToPath } = require("url");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        

        var user = await Guest.findOne({ userName: req.body.userName });
        if (!user){
            user = await OrgGuest.findOne({ userName: req.body.userName });
            if (!user){
                user = await Instructor.findOne({ userName: req.body.userName });
                if (!user){
                    user = await Admin.findOne({ userName: req.body.userName });
                    if (!user){
                        return res.status(400).send("user with given Username doesn't exist");
                    }        
                }    
            }

        }

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `http://localhost:${process.env.port}/api/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

router.post("/:userId/:token", async (req, res) => {
    try {
       
        var user = await Guest.findById(req.params.userId);
        if (!user){
             user = await OrgGuest.findById(req.params.userId);
            if (!user){
                 user = await Instructor.findById(req.params.userId);
                if (!user){
                     user = await Admin.findById(req.params.userId);
                    if (!user){
                        return res.status(400).send("invalid link or expired");        
                    }
                }    
            }
        }
        
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");

        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = router;