const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const router = express.Router();




router.post('/category/create',addCategory);
router.get('/category/get',getCategory);


module.exports = router;