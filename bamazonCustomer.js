var mysql = require("mysql");
var inquirer = require("inquirer");

//query the database
//console.log all the items and their properties
//inquire the id of the product they want to buy
	//if the input === one of the product ID's, then 
	//ask them how many to buy
//if quantity to buy <= quantity in stock, subtract purchased items from database & show price
	//else console.log "Insufficient Quantity!"

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_DB"
});

//once connected, run what is in the connect function
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
};

