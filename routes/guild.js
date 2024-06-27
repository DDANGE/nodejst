
var express = require('express');
var router = express.Router();

//.env 환경변수 불러오기
require("dotenv").config(); 

router.get(`/createGuild`, (req, res)=>{

    dbname = process.env.DB_NAME;


    res.send(`Hello ${req.requestTime} , ${dbname}`);
})

module.exports = router;