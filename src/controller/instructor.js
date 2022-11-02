const Instructor = require('../models/instructor');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');

exports.isInstructor = (req, res, next) => {
    if(req.user.role !== 'instructor'){
        return res.status(400).json({message: 'Access Denied'});
    }
    next();

};
exports.signin = (req, res) => {
    Instructor.findOne({email: req.body.email})
    .exec((error, instructor) =>{
        if(error) return res.status(400).json({error});
        if(instructor){
            if(instructor.authenticate(req.body.password)){
                const token = jwt.sign({_id:instructor._id, role: instructor.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
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
exports.createCourse = (req, res) => {
    let text = req.body.text;
    let videos = req.body.videos;
    let quizes = req.body.quizes;
    let chapter = [{videos,text, quizes}];
    const _course = new Course({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        mainPicture:req.body.mainPicture,
        shortVideo:req.body.shortVideo,
        price: req.body.price,
        createdBy:new mongoose.Types.ObjectId(req.body.createdBy),
        category:new mongoose.Types.ObjectId(req.body.category),
        chapters:chapter
      });
      _course.save((error, course) => {
          if(error) res.status(400).json({message:"an error occured"});
          if(course) res.status(201).json({message: "course created successfuly...!"});
        });



    
 }
