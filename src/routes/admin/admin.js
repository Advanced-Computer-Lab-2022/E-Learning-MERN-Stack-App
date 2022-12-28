const express = require('express');
const {signup, signin, addOrgGuest, addInstructor, isAdmin} = require('../../controller/admin/admin');
const {requireSignin} = require('../../commonMiddleWare/index');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/addAdmin',requireSignin, signup);
router.post('/admin/addOrgGuest',requireSignin, isAdmin, addOrgGuest);
router.post('/admin/addInstructor',requireSignin, isAdmin, addInstructor); 



module.exports = router;



