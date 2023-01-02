const Instructor = require('../models/instructor');
const Course = require('../models/course');
const jwt = require('jsonwebtoken');

exports.isInstructor = (req, res, next) => {
    if(req.user.role !== 'instructor') {
        return res.status(400).json({message: 'Access Denied'});
    }
    next();
};
exports.signin = (req, res) => {
    Instructor.findOne({userName: req.body.userName})
    .exec(async(error, instructor) => {
        if(error) return res.status(400).json({error});
        if(instructor) {
            const passwordVerify = await instructor.authenticate(req.body.password);

            if(passwordVerify) {
                const token = jwt.sign({_id:instructor._id, role: instructor.role, userName: instructor.userName}, process.env.JWT_SECRET, {expiresIn: '1d'});
                res.status(200).json({
                    token,
                    instructor
                });

            }
            else {
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
   firstBullet: req.body.firstBullet,
   secondBullet: req.body.secondBullet,
   thirdBullet: req.body.thirdBullet,
   firstInclude: req.body.firstInclude,
   secondInclude: req.body.secondInclude,
   thirdInclude: req.body.thirdInclude,
   createdBy: req.user.userName
       // sections: req.body.sections,
      //  faqs: req.body.faqs,
       
      });
      _course.save((error, course) => {
          if(error) return res.status(400).json({error});
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
exports.getRatingsAndReviews = (req, res) => {
    Instructor.findOne({user: req.user.userName})
    .exec((error, instructor) => {
        if(error) res.status(400).json({message:"an error occured"});
        if(instructor) res.status(200).json(instructor);
    });
}
exports.viewAllCourseRequests = (req, res) => {
    AdminCourseRequests.find()
    .exec((error, requests) => {
        if(error) return res.status(400).json({
            message: 'an error occured' 
        });
        if(requests) return res.status(200).json({requests});
    });
}
exports.setSelectedPromotions = (req, res) => {
    let courses = req.body.courses;
    for(let i=0; i<courses.length; i++) {
        Course.findOneAndUpdate({_id: courses[i].courseId, discount:{state:false, createdBy:req.user.userName}},
             {discount:{value:courses[i].value, endDate:courses[i].endDate, state:true}})
             .exec((error, updated) => {
                 if(error) return res.status(400).json({message: "error happened"});
             });
    }
    return res.status(200).json({message:"Offer added successfuly"});
}
exports.setPromotionsOnAll = (req, res) => {
        Course.updateMany({discount:{state:false}, createdBy:req.user.userName},
             {discount:{value:req.body.value, endDate:req.body.endDate, state:true}})
            .exec((error, updated) => {
                 if(error) return res.status(400).json({message: "error happened"});
                 if(updated) return res.status(200).json({message:"Offer added successfuly"});
             });
}
exports.removePromotions = (req, res) => {
    Course.updateMany({discount:{state:true, endDate:req.body.endDate},createdBy:req.user.userName},
         {discount:{value:0, state:false}})
    .exec((error, removed) => {
        if(error) return res.status(400).json({message: "error happened"});
        if(removed) return res.status(200).json({message:"error removed"});
    });
}

