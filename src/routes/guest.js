const express = require('express');
const { requireSignin } = require('../commonMiddleWare');
const {viewMyCourses} = require('../controller/course');
const { signup, signin, addToCart, removeFromCart, emptyCart } = require('../controller/guest');
const router = express.Router();



router.post('/guest/signup', signup);
router.post('/guest/signin', signin);
router.post('/guest/addToCart', addToCart);

// router.post('guest/removefromCart', removeFromCart());
// router.post('guest/emptyCart', emptyCart());


 module.exports = router;



















