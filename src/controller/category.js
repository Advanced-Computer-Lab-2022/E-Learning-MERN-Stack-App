const Category = require('../models/category');


function createCategory(categories, parentId=null){
   const list = [];
    let category;
    if(parentId===null){
         category = categories.filter((cat) =>  cat.parentId == undefined);
    }
    else{
         category = categories.filter(cat => cat.parentId == parentId);
    }
    for(curr of category)
    {
        list.push({
            _id: curr._id,
            name: curr.name,
            sub: createCategory(categories, curr._id)
        });
    }
    return list;

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