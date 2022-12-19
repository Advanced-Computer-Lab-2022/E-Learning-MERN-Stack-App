const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim:true
    },

    title: {
        type: String,
        required:true,
    },
 
    description: {
        type: String,
        required:true,
    },
    shortVideo: {
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    totalHours: Number,
    reviews: [{
        review: String,
        reviewerGuest:{type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
        reviewerOrgGuest:{type: mongoose.Schema.Types.ObjectId, ref: 'OrgGuest'}
    }],
    category: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'},
   chapters: [{
                chapterTitle: String ,
                videosAndTextModules:[String],
                quizzes:[String]
             }],
    students: [{type:mongoose.Schema.Types.ObjectId, ref: "Guest"},
    {type:mongoose.Schema.Types.ObjectId, ref: "OrgGuest"}
],

}, {timestamps: true});
courseSchema.virtual('enrollled').get(function(){
    return this.students.length;
});
module.exports = mongoose.model('Course', courseSchema);



