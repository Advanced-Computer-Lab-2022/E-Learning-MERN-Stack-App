
const Category = require('../models/category');
const slugify = require('slugify');

exports.addCategory = (req, res) => {
     const catObj = {
         name:req.body.name,
         slug:slugify(req.body.name)
        };
if(req.body.parentId){
    catObj.parentId = req.body.parentId;
}
const cat = new Category(catObj);
cat.save((error, category) => {
    if(error)return res.status(400).json({error});
    if(category)return res.status(200).json({category});
});

};
exports.getCategory = (req, res) => {
    Category.find({})
    .exec((error, category) => {
        if(error) return res.status(400).json({error});
        if(category) return res.status(200).json ({category});
    })
};