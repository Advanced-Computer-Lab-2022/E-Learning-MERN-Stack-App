const express = require('express');
const {signin, createCourse, isInstructor, getCourses, getRatingsAndReviews, setPromotionsOnAll,
    setSelectedPromotions,removePromotions
} = require('../controller/instructor');
const {requireSignin, changePassword, editInfo, issueProblem} = require('../commonMiddleWare/index');
const router = express.Router();

router.post('/instructor/signin', signin);
router.post('/instructor/createCourse',requireSignin, isInstructor, createCourse);
router.get('/instructor/getCourses',requireSignin, isInstructor, getCourses);
router.post('/instructor/changePassword',requireSignin, changePassword);
router.post('/instructor/editInfo',requireSignin, editInfo);
router.get('/instructor/myRatingsAndReviews',requireSignin, getRatingsAndReviews);
router.post('/instructor/setPromotionsOnAll',requireSignin,isInstructor, setPromotionsOnAll);
router.post('/instructor/setSelectedPromotions',requireSignin,isInstructor, setSelectedPromotions);
router.post('/instructor/removePromotions',requireSignin,isInstructor, removePromotions);
router.post('/instructor/issueProblem', requireSignin, issueProblem);
module.exports = router;