const express = require('express');
const { signup, signin } = require('../controller/guest');
const router = express.Router();



router.post('/guest/signup', signup);
router.post('/guest/signin', signin);


 module.exports = router;



















