var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Rugiya2468642",
    database: "bamazonDB"
});
//Connect to MYSQL and log our threadID
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as " + connection.threadId);
    printProducts();
});
// Function to print product
function printProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
        start();
    });
}

function start() {
    // connection.query("SELECT id,stock_quantity FROM products", function (err, res) {
    //     if (err) throw err;
    // prompt for info about Id and quantity of product
    inquirer
        .prompt([{
                name: "id",
                type: "input",
                message: "What is the Id of the product that you would like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return ("**ERROR** Invalid ID, enter a valid ID from the list");
                }
            },
            {
                name: "stock_quantity",
                type: "input",
                message: "How many units of the prodact would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return ("**ERROR** Enter a number");
                }
            }
        ])
        .then(function (answer) {
            var query = "SELECT * FROM products WHERE id = ?";
            connection.query(query, [answer.id], function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Your product choice is: " + res[i].product_name + "   for a quantity of  " + answer.stock_quantity);
                    console.log("We currently have a quantity of " + res[i].stock_quantity + "   for this product");
                    if (res[i].stock_quantity < answer.stock_quantity) {
                        console.log("Sorry there is not enough quantity of this product in stock.");
                        nextOption();
                    } else {
                        console.log("*****************************************************");
                        console.log("Your order has been processed.Thank you for Shopping!");
                        console.log("*****************************************************");
                        console.log("You purchased" + " " + res[i].product_name + "with quantity of   " + answer.stock_quantity);
                        var purchaseTotal = res[i].price * answer.stock_quantity;
                        console.log("Your total COST is $" + purchaseTotal);
                        var newQty = res[i].stock_quantity - answer.stock_quantity;
                        console.log("We now have a quantity of " + newQty + "  remaining for this product");
                        //Updating stock quantity in the database
                        connection.query("UPDATE products SET stock_quantity = " + newQty + " WHERE item_id = " + res[i].id, function (err, res) {
                            nextOption();
                        });
                    }
                }
            })
        })
}

function nextOption() {
    inquirer.prompt([{
            name: "continue",
            type: "confirm",
            message: "Do you want to puchase another product?"
        }])
        .then(function (response) {
            if (response.continue == true) {
                console.log("Do you want to continue shopping");
                printProducts();
            } else {
                console.log("Thank you for visiting!");
                console.log("GOOD BYE!");
                connection.end();
            }
        })
}