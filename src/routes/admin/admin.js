const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/admin.js');
const router = express.Router();



router.post('/admin/signup', signup);
router.post('/admin/signin', signin);

// router.post('/admin/profile', requireSignin, (req, res) => {
//     res.status(200).json({admin: 'profile'})
// });

module.exports = router;



