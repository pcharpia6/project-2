var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",

    port:3030,

    user:"root",

    password:"Omfg1234556!",
    database: "dingbucks_db"
});

connection.connect(function(err){
    if (err) throw err;

    start();
});


//contributors recieve 5 dingbucks for every 20 viewers.
//coaches recieve 10 ding bucks for every contracted gamer.
//SU's receive 