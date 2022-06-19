-- #Create the table about employees
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
select * from Udemy.Employees;

-- Update the data
# update Udemy.Employees set employeeID = 107 where employeeID =108;