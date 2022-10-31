const express = require('express');
const {signup, signin, addCompany, addOrgGuest, addInstructor,
     addCategory, isAdmin} = require('../../controller/admin/admin');
const {requireSignin} = require('../../commonMiddleWare/index');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.post('/admin/addCompany',requireSignin,isAdmin, addCompany);
router.post('/admin/addOrgGuest',requireSignin, isAdmin, addOrgGuest);
router.post('/admin/addInstructor',requireSignin, isAdmin, addInstructor); 
router.post('/admin/addCategory',requireSignin, isAdmin, addCategory);


module.exports = router;



