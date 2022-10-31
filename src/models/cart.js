const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const cartSchema = new mongoose.Schema({
    owner:{type: mongoose.Schema.Types.ObjectId, ref: "guest"}, 
    items: [{
        course:mongoose.Schema.Types.ObjectId,
         ref:"course",
         Price: mongoose.Schema.Types.Number,
         offer: mongoose.Schema.Types.Number,
      }]
}, {timestamps: true});
cartSchema.virtual('TotalPrice').get(function(){
    return "will be implemented later";
})


module.exports = mongoose.model('Cart', cartSchema); 