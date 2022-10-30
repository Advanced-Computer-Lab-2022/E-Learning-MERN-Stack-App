 const express = require('express');
 const {getCategory} = require('../controller/category');
 const {requireSignin} = require('../commonMiddleWare/index');
 const router = express.Router();



 router.get('/getCategory', getCategory);

 module.exports = router;