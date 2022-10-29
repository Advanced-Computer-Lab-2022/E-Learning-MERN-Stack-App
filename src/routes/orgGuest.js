const express = require('express');
const {signin} = require('../controller/orgGuest');
const router = express.Router();




router.post('/orgGuest/signin', signin);
module.exports = router;
