const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
   user:{
    type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true},
    cartItems:{
        product:{type: mongoose.Schema.Types.ObjectId, ref: 'Course', required:true},
        quantity:{type:Number,default:1 },
        price:{type: Number,required:true}
    }
   

}, {timestamps: true});
module.exports = mongoose.model('Cart', cartSchema)