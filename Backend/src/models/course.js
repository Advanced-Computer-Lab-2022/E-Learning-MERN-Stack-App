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
        createdBy:{type:mongoose.Schema.Types.String, ref:"instructor"}, 
        sections: [
            {
                idx: Number,
                title: String,
                lessonDescription: String,
                hours: Number,
                lesson: {
                    video: String,
                    title: String,
                    opened: {
                        type:Boolean,
                        default: false
                    }
                },
                testId: {
                    type:String,
                    unique: true
                }
            }
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
boughtBy:{
    type: Number,
    default: 0
},
finalPrice : {
    type: Number,
    default: function () {
        return this.price * (1-this.discount);
    }
}
},
 {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);



