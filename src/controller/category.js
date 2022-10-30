
const Category = require('../models/category');
const slugify = require('slugify');

function createCategory(categories, parentId=null){
    list = [];
    let category;
    if(parentId===null) category=categories.filter(cat =>  cat.parentId === undefined);
    else category = categories.filter(cat => cat.parentId === parentId);
    for(curr of category)
    {
        list.push({
            _id: curr._id,
            name: curr.name,
            slug: curr.slug,
            sub: createCategory(curr, curr._id)
        });
    }
    return list;

}

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
    .exec((error, categories) => {
        if(error) return res.status(400).json({error});
        if(categories){

            const categoryList = createCategory(categories);

         return res.status(200).json ({categoryList});
        }
    })
};