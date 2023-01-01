const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { stringify } = require('nodemon/lib/utils');
const instructorSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        min : 2,
        max : 25
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        min : 2,
        max : 25
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        index : true,
        lowercase : true
    },
    bio: String,
    role: {
        type:String,
        default:'instructor'
    },
    imgURL:String,
    country:{
        type:String,
        trim:true,
        required:true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
     },
     hash_password : {
         type : String,
         required : true
     }, 
    gender :{
         type: String,
         required: true,
     },
     courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     ratingsAndReviews: [
        {
            reviewerUserName: String,
            reviewerImgURL: String,
            reviewerReview: String,
            reviewerRating: Number,
        }
    ],
    rating: {
        type: Number,
        default: function () {
            let rating= 0;
            if(this.ratingsAndReviews.length===0) return 0;
            for(let i=0; i<this.ratingsAndReviews.length; i++) {
                rating += this.ratingsAndReviews[i].reviewerRating;
            }
            return rating / this.ratingsAndReviews.length;
        }
    },
     numberOfCourses:{
         type: Number,
         default: function () {
        if(this.courses.length==0) return 0;
        return this.courses.length;
     }
     },
     numberOfStudents:{
         type:Number,
         default:0
     },
     totalEarnings:{
         type:Number,
         default:0
     },
}, {timestamps : true});


instructorSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
instructorSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
})
instructorSchema.methods = {
     authenticate : async function(password) {
         return await bcrypt.compare(password, this.hash_password)
     }
 }
module.exports = mongoose.model('Instructor', instructorSchema); 