const express = require('express');
const {signin, createCourse, isInstructor, getCourses, getRatingsAndReviews, setPromotionsOnAll,
    setSelectedPromotions,removePromotions
} = require('../controller/instructor');
const {requireSignin, changePassword, editInfo} = require('../commonMiddleWare/index');
const router = express.Router();

router.post('/instructor/signin', signin);
router.post('/instructor/createCourse',requireSignin, isInstructor, createCourse);
router.get('/instructor/getCourses',requireSignin, isInstructor, getCourses);
router.get('/instructor/changePassword',requireSignin, changePassword);
router.post('/instructor/editInfo',requireSignin, editInfo);
router.get('/instructor/myRatingsAndReviews',requireSignin, getRatingsAndReviews);
router.post('/instructor/setPromotionsOnAll',requireSignin,isInstructor, setPromotionsOnAll);
router.post('/instructor/setSelectedPromotions',requireSignin,isInstructor, setSelectedPromotions);
router.post('/instructor/removePromotions',requireSignin,isInstructor, removePromotions);
module.exports = router;