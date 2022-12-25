const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({

        title: String,
        description: String,
        whatYouWillLearnBullets: [String],
        courseIncludes: [String],
        price:{
            type: Number,
            default: 0
        },
        previewVideoURL: String,
        previewVideoTitle: String,
        rating: Number,
        numberOfRatings:{
            type: Number,
            default: 0
        },
        //****************   Problem: HardCoded    ******************* */
        // instructor: {
        //     id: "inst-1452",
        //     name: "Corey Schafer",
        //     role: "Python Developer",
        //     imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
        //     numberOfCourses: 5,
        //     rating: 4.6,
        // },

        // instructor userName only only  
        createdBY:{type:mongoose.Schema.Types.String, ref:"instructor"}, 
        sections: [
            {
                idx: Number,
                title: String,
                lesson: {
                    video: String,
                    title: String,
                }, 
                hours: Number,
                lessonDescription: String,
                testId: {
                    type:String,
                    unique: true
                }
            },
        ],
        reviews: [
            {
                reviewerName: String,
                reviewerImgURL: String,
                reviewerReview: String,
                reviewerRating: Number,
            }
        ],
        faqs: [{
            question: String,
            answer: String
        }],
totalHours: {
    type: Number,
    default: function () {
        let totalHours = 0;
        for(let i=0; i<this.sections.length; i++) {
            totalHours += this.sections[i].hours;
        }
        return totalHours;
    }
},


},
 {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);



