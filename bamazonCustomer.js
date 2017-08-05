var mysql = require("mysql");
var inquirer = require("inquirer");

//query the database
//console.log all the items and their properties
//inquire the id of the product they want to buy
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
	queryProducts(whichItemandHowMany);
});

//grabbing products from the database
function queryProducts(callback){
	connection.query("SELECT * FROM products", function(err, results) {
    	if (err) throw err;
    	console.log(results);
    	callback();
	});
};

function whichItemandHowMany(){
	inquirer.prompt([
		{
	        name: "product",
	        message: "Which item would you like to purchase? (Please list Item Number.)",
        },
        {
        	name: "quantity",
        	message: "How many would you like to purchase?",
        }
        ]).then(function(inquirerResponse){
        	var product = inquirerResponse.product;
        	var quantityRequested = inquirerResponse.quantity;

        	connection.query("SELECT * FROM products WHERE item_id = ?", [product], function(err, results) {
		    	if (err) throw err;
		    	var stockQuantity = results[0].stock_quantity;
		    	if (quantityRequested <= stockQuantity){
		    		console.log("Your order has been processed!");
		    	}
		    	else {
		    		console.log("Sorry, our inventory is insufficient for your order. Please order a smaller quantity.")
		    	};
			});
        });
        
};




