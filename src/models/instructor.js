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
        required:false
    },
    // type may be changed later
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
     },
     about: String,
     hash_password : {
         type : String,
         required : true
     }, 
  
     gender :{
         type: String,
         reequired: true,
     },
     courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     rating:[{
         traineeUserName: String,
         traineeRole: String,
         ratingValue: Number

     }],
     totalRating: {
        type: Number,
        default: function () {
            let totalRating = 0;
            for(let i=0; i<this.rating.length; i++) {
                totalRating += this.rating[i].ratingValue;
            }
            return totalHours;
        }
    },
     numberOfCourses: Number,
     numberOfStudents:Number,
     totalEarnings:Number,
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
 };


module.exports = mongoose.model('Instructor', instructorSchema); 