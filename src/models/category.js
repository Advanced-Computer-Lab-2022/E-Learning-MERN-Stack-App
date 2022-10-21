const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({

}, {timestamps: true});
module.exports = mongoose.model('Category', categorySchema)