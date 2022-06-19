-- Create the table about employees
# CREATE TABLE `Udemy`.`Employees` (
    # employeeID int primary key auto_increment,
#     employeeName varChar(20) not null,
#     age int,
#     salary int default 1500,
#     supervisor int,
#     department int
# );

-- See the details of the database
# describe UdemployeeIDemy.Employees;

-- Drop the table
# drop table Udemy.Employees;
-- Method 1 
# insert into Udemy.Employees values(100, "Josh", 35, 3500, null, 1);
-- Method 2
# insert Udemy.Employees(employeeName, age, salary, supervisor, department ) values("Mike",40,2400,100,1);
-- Add other data
# insert into Udemy.Employees values(102, "Cody", 37, 2400, 100, 2);
# insert into Udemy.Employees values(103, "Nolan", 34, 1500, 101, 1);
# insert into Udemy.Employees values(104, "Jason", 33, 1500, 102, 2);
# insert into Udemy.Employees values(105, "Fred", 30, 1500, 101, 1);
# insert into Udemy.Employees values(106, "Zach", 29, 1500, 101, 1);
# insert into Udemy.Employees values(108, "Oliver", 30, 1500, 102, 2);

-- See all the data inside the table
# select * from Udemy.Employees;

-- Update the data
# update Udemy.Employees set employeeID = 107 where employeeID = 108; #One item
-- For multi-item, u need to close the safe update function and then u can
-- update the multi items
# SET SQL_SAFE_UPDATES=0;
# update Udemy.Employees set salary = 1800 where salary = 1500; #Multi item
# SET SQL_SAFE_UPDATES=1;

-- Delete the item
# delete from Udemy.Employees where  employeeID = 107;
# delete from Udemy.Employees where  employeeID = null;
-- Delete all the data within the table
# delete from Udemy.Employees;
-- Delete(drop) the tables
# drop table Udemy.Employees;

-- query (searching)
-- Searching all
# select * from Udemy.Employees;
-- Searching for some certain items
# select employeeID, employeeName from Udemy.Employees;
-- sorting using some way(using order by)(from small to big)
# select * from Udemy.Employees order by age;
-- sorting using some way(using order by)(from big to small)
# select * from Udemy.Employees order by age desc;
-- Choose first m items(Using limit)
# select * from Udemy.Employees limit 3;
-- Find some value larger than some specific values
-- You can also use "and" and "or"
# select * from Udemy.Employees where salary >=2000;
# select * from Udemy.Employees where department = 2;
# select * from Udemy.Employees where salary >=2000 and department = 1;





