const express = require('express');
const guild = require('./routes/guild.js');

const app = express();
const port = 8080;

app.use('/guild', guild);

app.use(function (req, res, next){

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = `${year}-${month}-${day}`;

  req.requestTime = dateStr;
  next();
})


app.get('/', (req, res) => {
  res.send(`Hello node express! ${req.requestTime}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})