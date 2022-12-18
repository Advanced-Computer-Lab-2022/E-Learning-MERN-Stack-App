const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const cartSchema = new mongoose.Schema({
    owner:{type: mongoose.Schema.Types.ObjectId, ref: "guest"}, 
    items: [{
    course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "course",
        },
         price: Number,
         offer: Number,
      }]
}, {timestamps: true});


cartSchema.virtual('TotalPrice').get(function(){
    return "will be implemented later";
})

module.exports = mongoose.model('Cart', cartSchema); 