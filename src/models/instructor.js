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
    role: {
        type:String,
        default:'instructor'
    },
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
  
     gender : {
         type : String,
         enum : ['male', 'female', 'prefere not to say']
     },
     courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     rating: Number,
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