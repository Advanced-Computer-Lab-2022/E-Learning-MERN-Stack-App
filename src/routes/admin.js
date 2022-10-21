const express = require('express');
const { signup, signin } = require('../controller/admin');
const router = express.Router();



router.post('/admin/signin', signin);

module.exports = router;