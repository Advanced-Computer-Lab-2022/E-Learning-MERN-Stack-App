const mongoose = require('mongoose');
const adminCourseRequestsSchema = new mongoose.Schema({
 orgGuestUserName: String,
 course:{type:mongoose.Schema.Types.ObjectId, ref:"course"},
 requestState:{
     type:Boolean,
     default: false
 }
}, {timestamps : true});
module.exports = mongoose.model('AdminCourseRequests', adminCourseRequestsSchema); 