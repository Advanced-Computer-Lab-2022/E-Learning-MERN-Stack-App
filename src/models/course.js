const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({

        title: String,
        description: String,
        category : String,
        whatYouWillLearnBullets: [String],
        courseIncludes: [String],
        price:{
            type: Number,
            default: 0
        },
        previewVideoURL: String,
        previewVideoTitle: String, 
        createdBy:{type:mongoose.Schema.Types.String, ref : "instructor"}, 
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
                test:[
                    {
                        idx:Number,
                        quesDesc:String,
                        topicNumber:String,
                        topicName:String,
                        answer1:String,
                        answer2:String,
                        answer3:String,
                        answer4:String,
                        correctAnswer:Number
                    }
                ]
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
            type:Number,
            default:0
        }, 
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
rating: {
    type: Number,
    default: function () {
        let rating= 0;
        for(let i=0; i<this.ratingsAndReviews.length; i++) {
            rating += this.ratingsAndReviews[i].reviewerRating;
        }
        return rating / this.ratingsAndReviews.length;
    }
},
 number:{
    type: Number,
    default: 0
},
currentPrice : {
    type: Number,
    default: function () {
        return this.price * (1-this.discount);
    }
}
},
 {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);



