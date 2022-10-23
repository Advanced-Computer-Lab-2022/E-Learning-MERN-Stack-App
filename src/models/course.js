const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    slug:{
        type: String,
        required: true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type: String,
        enum: ['Payed Course', 'Free Course'],
        default: 'Payed Course'
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: {type: Number},
    reviews: [{
        review: String,
        reviewerId: mongoose.Schema.Types.ObjectId, ref: 'Guest'
    }],
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'},
    updatedAt: Date


}, {timestamps: true});
module.exports = mongoose.model('Course', categorySchema)



/*

course schema:
    1) about page
       * name
       * title
       * subtitle
       * about text
       * short video
       * picture
       * reviews       // link with normal/corp trainee
       * price
       * rating      // link with normal/corp trainee
       * instructor // link with instructor
       * category  // link with category
       * number of enrolled students of all time
2) content
   * chapters
      a) vidoes
         - video number
      b) text lessons with pictures 
      c) quizes
      d) discussion board    // link with enrolled students & instructor























*/