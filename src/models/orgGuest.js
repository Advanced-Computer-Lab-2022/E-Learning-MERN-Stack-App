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
    company:{type: mongoose.Schema.Types.ObjectId, ref: 'company'},
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
     hash_password : {
         type : String,
         required : true,
     }, 
     role: {
         type: String,
         default:'corpTrainee',
     },
     courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
     gender : {
         type : String,
         enum : ['male', 'female']
     }
}, {timestamps : true});


orgGuestSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
orgGuestSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
})
orgGuestSchema.methods = {
     authenticate : async function(password) {
         return await bcrypt.compare(password, this.hash_password)
     }
 };


module.exports = mongoose.model('ORGGuest', orgGuestSchema); 