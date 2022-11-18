const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const{requireSignin, isAdmin} = require('../commonMiddleWare/index'); 
const router = express.Router();




router.post('/category/create',requireSignin, isAdmin, addCategory);
router.get('/category/get',getCategory);


module.exports = router;