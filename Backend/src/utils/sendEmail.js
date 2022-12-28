// ///////////include 
// USER = ACLTeamName@hotmail.com
// PASS = Aabb1122
// SERVICE = hotmail
// in .env file
// ////////////////////


const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {

    var xoauth2 = require('xoauth2');


    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        port: 587,
        secureConnection: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },tls: {
            ciphers:'SSLv3'
        }
    });
    var mailOptions = {
        from: process.env.USER,
        to: email,
        subject: subject,
        text: text,
    }
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error, "email not sent");
        }else{
            console.log("email sent sucessfully");
            res.redirect('/');
        }
    });    
     

};

module.exports = sendEmail;