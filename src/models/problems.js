const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const problemsSchema = new mongoose.Schema({

    problem:String,
    issuer:String, 
    role:String,
     solver:String,
     solution:String,
     resolved:{
         type:Boolean,
         default:false
     }

}, {timestamps : true});




module.exports = mongoose.model('problems', problemsSchema); 