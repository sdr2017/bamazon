# Bamazon Application



Bamazon is a simple commerce application that displays products for sale from a database and invites the user to select a product and make a purchase.

##Behind the Scenes
First a database was created and a products table was added using mysql.
![Make Database](/images/mysql_createDB.png)

Then products were added to the database.
![Make Database](/images/mysql_addItems.png)

##How It Works
The user opens bash and runs the node application. They are shown the list of all available products for sale.
![Make Database](/images/running_list.png)

The user is then prompted to select an item to purchase.
![Make Database](/images/running_promptItem.png)

After an item id is selected, the user is prompted for the number of items they would like to purchase.
![Make Database](/images/running_howMany.png)

If there are enough items in stock to fulfill their order, the user will be notified that their purchase was recorded and given the total amount owed. 
![Make Database](/images/running_orderProcessed.png)

The database will update the stock quantity for that item accordingly.
_Before_
![Make Database](/images/running_stockOriginal.png)

_After_
![Make Database](/images/running_stockUpdate.png)

If the user requests to purchase more items than are in stock, they will be notified that there is insufficient stock to complete their purchase, and asked to try again. 
![Make Database](/images/running_sorry.png)

