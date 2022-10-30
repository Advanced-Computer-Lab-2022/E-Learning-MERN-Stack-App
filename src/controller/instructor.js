const Instructor = require('../models/instructor');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb');
const { isObjectIdOrHexString, default: mongoose } = require('mongoose');

exports.signin = (req, res) => {
    Instructor.findOne({email: req.body.email})
    .exec((error, instructor) =>{
        if(error) return res.status(400).json({error});
        if(instructor){
            if(instructor.authenticate(req.body.password)){
                const token = jwt.sign({_id:instructor._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
                res.status(200).json({
                    token,
                    instructor
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
// exports.createCourse(req, res) => {
//     let text = ["docj", "deiuch", "iduch"];
//     let videos = ["lweiudfh","edichu", "edulyhv"];
//     let quizes = ["dikchv", "kduhbc", "deliuch"];
//     course = new Course({
//         name: "first",
//         title: "first",
//         description: "first",
//         mainPicture: "first",
//         shortvideo: "first",
//         price: 120,
//         category: new mongoose.Schema.Types.ObjectId("635e2827f55b94e851fa0dcb")



//     });


    
// }
