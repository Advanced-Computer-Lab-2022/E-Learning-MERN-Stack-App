const OrgGuest = require('../models/orgGuest');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');


exports.signin = (req, res) => {
    OrgGuest.findOne({userName: req.body.userName})
    .exec(async(error, orgGuest) =>{
        if(error) return res.status(400).json({error});
        if(orgGuest){
            const passwordVerify = await orgGuest.authenticate(req.body.password);

            if(passwordVerify){
                const token = jwt.sign({_id:orgGuest._id, role: orgGuest.role, userName: orgGuest.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
           
                res.status(200).json({
                    token,
                    orgGuest
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


exports.viewMyCourses = (req, res) => {
    let myCourses = [];
    OrgGuest.findOne({_id: req.user._id})
    .exec((error, guest) => {
     if(error) return res.status(400).json({
         message: 'an error occured' 
     });
     if(guest) {
         for(let i=0; i < guest.courses.length; i++) {
             let currCourse = guest.courses[i];
             Course.findById(currCourse)
             .exec((error, course) => {
                if(error) return res.status(400).json({message: 'an error occured'});
                if(course) myCourses.push(course);
             })
         }
         return res.status(200).json({myCourses});
     }
});
}
