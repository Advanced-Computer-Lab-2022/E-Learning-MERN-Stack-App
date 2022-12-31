const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { stringify } = require('nodemon/lib/utils');
const adminSchema = new mongoose.Schema({
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
        default:'admin'
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
     hash_password : {
         type : String,
         required : true
     }, 
     courseRequests: [{
         courseId:mongoose.Schema.Types.ObjectId,
         orgGuestUserName: String
    }],
     gender :{
        type: String,
        required: true,
    },
}, {timestamps : true});


adminSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
adminSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
})
 adminSchema.methods = {
     authenticate : async function(password) {
         return await bcrypt.compare(password, this.hash_password)
     }
 };


module.exports = mongoose.model('Admin', adminSchema); 