const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const guestSchema = new mongoose.Schema({
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
        required:false
    },
    wallet:{
        type:Number,
        default:0
    },
    courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],

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
         required : true
     }, 
     role:{type:String, default:"individualTrainee"},
     gender :{
        type: String,
        required: true,
    },
}, {timestamps : true});


guestSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});

 guestSchema.methods = {
     authenticate : async function(password) {
         return await bcrypt.compare(password, this.hash_password)
     }
 };


module.exports = mongoose.model('Guest', guestSchema); 