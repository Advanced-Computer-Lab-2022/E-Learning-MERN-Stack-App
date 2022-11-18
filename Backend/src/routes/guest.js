const express = require('express');
const { signup, signin } = require('../controller/guest');
const router = express.Router();



router.post('/guest/signup', signup);
router.post('/guest/signin', signin);
// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({guest: 'profile'})
// });

 module.exports = router;




/*
Instructor:
1) fname
2) lname
3) mail
4) passw
5) userName
6) gender
7) country
8) courses
9) no of students
10) 
















*/