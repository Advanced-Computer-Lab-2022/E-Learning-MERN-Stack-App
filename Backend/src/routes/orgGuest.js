const express = require('express');
const {signin, logout} = require('../controller/orgGuest');
const router = express.Router();




router.post('/orgGuest/signin', signin);
router.get('/orgGuest/logout', logout);
module.exports = router;
