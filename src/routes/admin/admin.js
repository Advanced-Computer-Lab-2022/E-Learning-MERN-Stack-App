const express = require('express');
const { signup, signin} = require('.../controller/admin/admin.js');
const requireSignin = require('.../commomMiddleWare/index');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.post('/admin/profile', requireSignin, (req, res) => {
     res.status(200).json({admin: 'profile'})
 });

module.exports = router;



