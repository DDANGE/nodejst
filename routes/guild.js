
var express = require('express');
var router = express.Router();

const mysql = require('mysql2');
const Guild = require(`../Model/Guild.js`);

//.env 환경변수 불러오기
require("dotenv").config(); 

router.get(`/createGuild`, (req, res)=>{

    dbname = process.env.DB_NAME;

    const connection = mysql.createConnection(
        {
            host : process.env.DB_HOST,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_NAME
        }
    );

    connection.connect();

    query = `SELECT * FROM af2_actor`;
    connection.query(query, (error, rows, fields) =>{
        if(error) throw error;
        console.log(`DataRow : `, rows);
        res.send(rows);
        //res.send(`Hello ${req.requestTime} , ${dbname}`, rows);
    });
    
    connection.end();
})

router.get(`/promiseTest`, (req, res)=>{
  
    age = 20;

    const promise = new Promise((resolve, reject)=>{
        if(age > 10)
            resolve("OverAge");
        else
            reject("lessAge");
    });

    promise
    .then((value)=>{
        console.log(value);
        res.send(value);
    })
    .catch((error)=>{
        console.log(error);
        res.send(error);
    });

});

router.get(`/mysql2test`, async (req, res)=>{
    
    const guildInfo = await Guild.getGuildInfo(1);   
    
    if(guildInfo.length < 1)     
        return res.send(`not found guildInfo error`);

    console.log(guildInfo);

    res.send(guildInfo);
    
});

module.exports = router;