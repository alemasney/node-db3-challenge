# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    SELECT products.productName, categories.categoryName 
    FROM [Products]
    join categories on products.CategoryID = categories.categoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    SELECT o.orderID, c.customerName
    FROM Orders as o
    join customers as c on o.customerID = c.customerID
    where o.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    SELECT p.ProductName, od.Quantity, o.OrderID
    FROM OrderDetails as od
    join products as p on p.productID = od.ProductID
    join Orders as o on od.OrderID = o.OrderID
    where o.OrderID = 10251
    order by p.productName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT o.OrderID as OrderID, c.CustomerName as CustomerName, e.LastName as EmployeeLastName
    FROM Orders as o
    join Customers as c on c.CustomerID = o.CustomerID
    join Employees as e on e.EmployeeID = o.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 