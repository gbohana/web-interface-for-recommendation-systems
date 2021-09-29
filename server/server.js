const express = require('express');
const app = express();
var mysql = require('mysql');
const axios = require('axios')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bonovoxlima"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(3001, () => console.log("running on port 3001"))
// axios
//   .post('https://whatever.com/todos', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })