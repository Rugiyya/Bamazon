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
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([{
                name: "Id",
                type: "input",
                message: "What is the Id of the product that you would like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
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
                    return false;
                }
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "SELECT * FROM products WHERE id = ?", [answer.id],
                function (err, res) {
                    for (let i = 0; i < res.length; i++) {
                        console.log("Your product choise is" + res[i].product_name)
                    }

                },

            );
        });
    // })
}