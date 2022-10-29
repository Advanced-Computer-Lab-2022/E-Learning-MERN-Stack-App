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
    courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
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
     role:{type:String, default:"normalTrainee"},
     gender : {
         type : String,
         enum : ['male', 'female', 'prefere not to say']
     }
}, {timestamps : true});


guestSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
guestSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
})
 guestSchema.methods = {
     authenticate : function(password) {
         return bcrypt.compareSync(password, this.hash_password)
     }
 };


module.exports = mongoose.model('Guest', guestSchema); 