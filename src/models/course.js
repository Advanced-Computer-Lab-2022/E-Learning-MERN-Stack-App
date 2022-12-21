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
    reviews: [{
        review: String,
        reviewerGuest:{type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
        reviewerOrgGuest:{type: mongoose.Schema.Types.ObjectId, ref: 'OrgGuest'}
    }],
    category: String,
    createdBy: {type: mongoose.Schema.Types.String, ref: 'Instructor'},
   chapters: [{
                chapterTitle: String ,
                videosAndTextModules:[String],
                quizzes:[String], 
                hours: Number
             }],
    students: [{type:mongoose.Schema.Types.ObjectId, ref: "Guest"},
    {type:mongoose.Schema.Types.ObjectId, ref: "OrgGuest"}
],
enrolled: {
    type: Number,
    default: function () {
        return this.students.length;
    }
},
totalHours: {
    type: Number,
    default: function () {
        let totalHours = 0;
        for(let i=0; i<this.chapters.length; i++) {
            totalHours += this.chapters[i].hours;
        }
        return totalHours;
    }
},


},
 {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);



