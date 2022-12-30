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
    Instructor.findOne({userName: req.body.userName})
    .exec(async(error, instructor) => {
        if(error) return res.status(400).json({error});
        if(instructor){
            const passwordVerify = await instructor.authenticate(req.body.password);

            if(passwordVerify){
                const token = jwt.sign({_id:instructor._id, role: instructor.role, userName: instructor.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
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
   const _course = new Course({
   title: req.body.title,
   description: req.body.description,
   category: req.body.category,
   price: req.body.price,
   previewVideoTitle: req.body.previewVideoTitle,
   previewVideoURL: req.body.previewVideoURL,
   discount: req.body.discount,
   whatYouWillLearnBullets: req.body.whatYouWillLearnBullets,
   courseIncludes: req.body.courseIncludes,
   createdBy: req.user.userName
       // sections: req.body.sections,
        //faqs: req.body.faqs,
       
      });
      _course.save((error, course) => {
          if(error) return res.status(400).json({message:"an error occured"});
          if(course) return res.status(201).json({message: "course created successfuly...!"});
        });
};

exports.getCourses = (req, res) => {
    Course.find({createdBy: req.user.userName})
        .exec((error, courses) => {
            if(error) return  res.status(400).json({message:"an error occured"});
            if(courses)return  res.status(200).json(courses);
        });
}

exports.getRatingsAndreviews = (req, res) => {
    Instructor.findOne({user: req.user.userName})
    .exec((error, instructor) => {
        if(error) res.status(400).json({message:"an error occured"});
        if(instructor) res.status(200).json(instructor);
    });

}
