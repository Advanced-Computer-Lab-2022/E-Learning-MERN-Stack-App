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
    shortVid: {
        type:String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type: String,
        enum: ['Payed Course', 'Free Course'],
        default: 'Payed Course'
    },
    offer: Number,
    rating: Number,
    reviews: [{
        review: String,
        reviewerId:{type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
        reviewerId:{type: mongoose.Schema.Types.ObjectId, ref: 'OrgGuest'}
    }],
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'},
    enrolled:this.students.count(),
   chapters: [{
           videos:[String],
           text: [String],
           quizes:[String]
         }],
    students: [{type:mongoose.Schema.Types.ObjectId, ref: "Guest"},
    {type:mongoose.Schema.Types.ObjectId, ref: "OrgGuest"}
],
companies:[{ type:mongoose.Schema.Types.ObjectId,ref:"Company"}],


}, {timestamps: true});
module.exports = mongoose.model('Course', courseSchema);



