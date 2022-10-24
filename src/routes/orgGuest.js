const express = require('express');
const { signup, signin } = require('../controller/orgGuest');
const {requireSignin, isAdmin} = require('../commonMiddleWare/index')
const router = express.Router();



router.post('/orgGuest/signup',requireSignin, isAdmin, signup);
router.post('/orgGuest/signin', signin);