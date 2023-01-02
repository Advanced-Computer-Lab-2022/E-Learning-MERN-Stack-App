const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({

       title: String,
       description: String,
       category : String,
       firstBullet: String,
       secondBullet: String,
       thirdBullet: String,
       firstInclude: String,
       secondInclude: String,
       thirdInclude: String,
        price:{
            type: Number,
            default: 0
        },
        previewVideoURL: String,
        previewVideoTitle: String, 
        createdBy: String, 
        sections: [
            {
                idx: Number,
                title: String,
                lessonDescription: String,
                hours: Number,
                lesson: {
                    video: String,
                    title: String,
                 },
                test:[{
                        idx:Number,
                        quesDesc:String,
                        topicNumber:String,
                        topicName:String,
                        answer1:String,
                        answer2:String,
                        answer3:String,
                        answer4:String,
                        correctAnswer:Number
                    }],
                
            } // end section
        ],
        ratingsAndReviews: [
            {
                reviewerUserName: String,
                reviewerImgURL: String,
                reviewerReview: String,
                reviewerRating: Number,
            }
        ],
        faqs: [{
            question: String,
            answer: String
        }],
        discount: {
            value:{
                type:Number,
                default:0,
            },
            endDate:{
                type:Date,
                default:Date.now
            },
            state:{
                type:Boolean,
                default:false
            } 
        }, 
// totalHours: {
//     type: Number,
//     default: function () {
//         let totalHours = 0;
//         for(let i=0; i<this.sections.length; i++) {
//             totalHours += this.sections[i].hours;
//         }
//         return totalHours;
//     }
// },
// rating: {
//     type: Number,
//     default: function () {
//         let rating= 0;
//         for(let i=0; i<this.ratingsAndReviews.length; i++) {
//             rating += this.ratingsAndReviews[i].reviewerRating;
//         }
//         return rating / this.ratingsAndReviews.length;
//     }
// },
currentPrice : {
    type: Number,
    default: function () {
        return this.price * (1-this.discount.value);
    }
}
},
 {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);



