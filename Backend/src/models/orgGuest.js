const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const orgGuestSchema = new mongoose.Schema({
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
    country:{
        type:String,
        trim:true,
        required: false

    },
    // type may be changed later
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
     },
     imgURL:String,
     hash_password : {
         type : String,
         required : true,
     }, 
     role: {
         type: String,
         default:'corporateTrainee',
     },
     courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     requestedCourses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     gender :{
        type: String,
        required: true,
    },
}, {timestamps : true});


orgGuestSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
orgGuestSchema.methods = {
     authenticate : async function(password) {
         return await bcrypt.compare(password, this.hash_password)
     }
 };


module.exports = mongoose.model('OrgGuest', orgGuestSchema); 