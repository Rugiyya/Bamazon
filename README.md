# BAMAZON

Creator: Rugiyya Mammadov

## ABOUT THE APP
Bamazon is a command line node app that takes in orders from customers and depletes stock from the store's inventory.

## HOW TO USE BAMAZON

  Step by Step instructions

1. Open your terminal such as Bash.

1. Navigate to the folder that contains the **bamazon.js** file.

1. You will be presented with a lits of products

   Screen-shot: List of products

   ![alt text](/images/ss1.png)

1. The system validates if a user enters the correct Item ID and also validates if there is sufficient quantity available.

   Screen-shot: Validation

   ![alt text](/images/ss2.png)

   ![alt text](/images/ss3.png)

1. If quantity is insuffucent, the user is asked if they want to purchase another item.

   Screen-shot: Quantity Check

   ![alt text](/images/ss4.png)

1. If a valid Item ID is entered and there is enough quantity available, the app will sucessfully process the transaction and display the output to the user. The stock quantity is also deducted and display to the user.

    Screen-shot: Successfull Transaction

    ![alt text](/images/ss5.png)

1. After the first transaction is complete, the user is asked if they want to continue shopping.

1. If the user choses to continue shopping, then a list of products is displayed again, other wise the app will shut down.

## TECHNOLOGIES USED
 * Javascript
 * Nodejs
 * MySQL
 * Node packages:
   * MySQL
   * Inquirer
   * Git
   * GitHub
