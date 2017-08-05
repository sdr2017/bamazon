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

//asking user which item they want and how many
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
        	//assigning responses to variables
        	var product = inquirerResponse.product;
        	var quantityRequested = inquirerResponse.quantity;

        	//pulling specific product requested from the DB
        	connection.query("SELECT * FROM products WHERE item_id = ?", [product], function(err, results) {
		    	if (err) throw err;

		    	//put the quantity and price of the requested item in variables
		    	var stockQuantity = results[0].stock_quantity;
		    	var itemPrice = results[0].price;

		    	//determine if there is enough stock to accomodate the order
		    	if (quantityRequested <= stockQuantity){
		    		var newQuantity = stockQuantity - quantityRequested;
		    		var totalPrice = itemPrice * quantityRequested;

		    		connection.query("UPDATE products SET stock_quantity= ? WHERE item_id = ?", [newQuantity, product], function(err, results) {
		    		if (err) throw err;
		    		});

	    		console.log("Your order has been processed! Your total is: $" + totalPrice);
		    	}
		    	else {
		    		console.log("Sorry, our inventory is insufficient for your order. Please order a smaller quantity.")
		    	};
			});

        });
        
};




