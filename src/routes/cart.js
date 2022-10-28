const express = require('express');
const { addItemToCart} = require('../controller/cart');
const{requireSignin, isGuest} = require('../commonMiddleWare/index'); 
const router = express.Router();




router.post('/guest/cart/addtocart',requireSignin, isGuest, addItemToCart);



module.exports = router;