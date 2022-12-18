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
    mainPicture:{
        type:String,
        required: true
    },
    shortVideo: {
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type: String,
        required: true 
    },
    offer:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    reviews: [{
        review: String,
        reviewerId:{type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
        reviewerId:{type: mongoose.Schema.Types.ObjectId, ref: 'OrgGuest'}
    }],
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'},
   chapters: [{
           videos:[String],
           text: [String],
           quizes:[String]
         }],
    students: [{type:mongoose.Schema.Types.ObjectId, ref: "Guest"},
    {type:mongoose.Schema.Types.ObjectId, ref: "OrgGuest"}
],
companies:[{type:mongoose.Schema.Types.ObjectId,ref:"Company"}],


}, {timestamps: true});
courseSchema.virtual('enrollled').get(function(){
    return this.students.length;
});
module.exports = mongoose.model('Course', courseSchema);



