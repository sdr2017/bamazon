# Bamazon Application



Bamazon is a simple commerce application that displays products for sale from a database and invites the user to select a product and make a purchase.

First a database was created using mysql.
![Make Database](/images/mysql_createDB.png)

It works by listing all available products for sale.

It then prompts the user to select an item to purchase.

After an item id is selected, the user is prompted for the number of items they would like to purchase.

If there are enough items in stock to fulfill their order, the user will be notified that their purchase was recorded and given the total amount owed. The database will update the stock quantity for that item accordingly.

If the user requests to purchase more items than are in stock, they will be notified that there is insufficient stock to complete their purchase, and asked to try again. 