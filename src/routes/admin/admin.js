const express = require('express');
const {signup, signin, addOrgGuest, addInstructor, isAdmin, viewAllCourseRequests} = require('../../controller/admin/admin');
const {requireSignin, editInfo} = require('../../commonMiddleWare/index');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/addAdmin',requireSignin, signup);
router.post('/admin/signin', signin);
router.post('/admin/addOrgGuest',requireSignin, isAdmin, addOrgGuest);
router.post('/admin/addInstructor',requireSignin, isAdmin, addInstructor); 
router.post('/admin/editInfo', requireSignin, editInfo);
router.post('/admin/viewAllCourseRequests', requireSignin,isAdmin, viewAllCourseRequests);
module.exports = router;



