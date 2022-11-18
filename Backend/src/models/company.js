const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const companySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true
        },
        hash_password:String,


}, {timestamps: true});
companySchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);

});
module.exports = mongoose.model('Company', companySchema);