const express = require('express');
const {signup, signin, addOrgGuest, addInstructor, isAdmin, viewAllCourseRequests,
    setPromotionsOnAll, setSelectedPromotions, removePromotions,
    viewAllProblems, viewButNotResolve, resolveProblem  
} = require('../../controller/admin/admin');
const {requireSignin, editInfo} = require('../../commonMiddleWare/index');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/addAdmin',requireSignin, signup);
router.post('/admin/signin', signin);
router.post('/admin/addOrgGuest',requireSignin, isAdmin, addOrgGuest);
router.post('/admin/addInstructor',requireSignin, isAdmin, addInstructor); 
router.post('/admin/editInfo', requireSignin, editInfo);
router.post('/admin/viewAllCourseRequests', requireSignin, isAdmin, viewAllCourseRequests);
router.post('/admin/setPromotionsOnAll',requireSignin,isAdmin, setPromotionsOnAll);
router.post('/admin/setSelectedPromotions',requireSignin,isAdmin, setSelectedPromotions);
router.post('/admin/removePromotions',requireSignin,isAdmin, removePromotions);
router.get('/admin/viewAllProblems',requireSignin,isAdmin, viewAllProblems);
router.get('/admin/viewButNotResolve',requireSignin,isAdmin, viewButNotResolve);
router.get('/admin/resolveProblem',requireSignin,isAdmin, resolveProblem);
module.exports = router;



