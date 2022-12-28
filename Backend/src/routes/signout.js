const jwt = require('jsonwebtoken');
const express = require("express");
const { fileURLToPath } = require("url");
const router = express.Router();

router.post("/", async (req, res) => {
    try{ 
        res.cookie('jwt',"");
        res.status (200).json("you are logged out")
    }catch (error){
        res. status (406).json({ error: error.messages });
    }
});
    
module.exports = router;
