# SQL

SQL 就是 Structure Query Language，
中文是有架構的查詢語言。

- What is DBMS?

  DBMS 是 DataBase Management System(數據庫管理系統)。

  1. RBDMS

     R 是代表 Relational，
     RBDMS 代表關聯型資料庫。

  2. C.R.U.D

     Create, Read, Update, Delete，
     所有數據庫都涵蓋這四個功能。

  3. SQL and NoSQL

     SQL 是 Relational DataBase，
     因此任何不是 Relational DataBase 的就是 NoSQL。

     那什麼是關聯型數據庫呢？
     假如這個數據庫的各個資料，彼此是有關係的。
     譬如第一個資料跟第二個資料代表客戶跟負責業務，
     第三個資料則代表公司的人員組成，這樣就算彼此有關係的。

     <mark>下面這點跟資料結構有關!</mark>

     另外 SQL 找資料是用`sequential serach(O(n))`，
     但是 NoSQL 是用`Hash function(O(1))`

  4. Keys

  - Primary key

    每個 table 都有他們各自的 primary key，而且這個是唯一的，因此在某個 table 有這組 primary key(無重複)，在其他地方可重複的就不是 primary key。

  - Foreign key

    當有 table 裡的資料代表其他 table 的資料時，代表這個是 foreign key。(可重複)

  - Natural key

    當使用者輸入像是身分證字號這種，
    在自然界中是有意義的，
    稱為 natural key。

  - Surrogate key

    跟 natural key 相反，
    要是在自然界中是無意義的，
    就稱為 surrogate key。(代理的 key(primary or foreign))

  - Composite key

    假如要用兩段資料才能組成 primary key(以往只要一段)，這個就稱為 composite key。廣義上也是無重複(他們兩段的排列組合無重複)

---

- Data types

  詳細的也可以去 w3schools 看。

  1. INT

  2. DECIMAL(p,s)

     這是十進位的部分。
     其中的 p 是 total digits，s 是 digits after the dot，
     例如我們想輸入 3.14，
     則因為全部有三個數字(3,1,4)，但是小數點後面只有兩個，
     因此 p 在這邊是 3，s 在這邊是 2。

  3. VARCHAR(M)

     這個是 char 的部分，因此裡面的 M 代表總共可以塞幾個字元(characters)。
     另外在 SQL 裏，string 不叫 string 叫做 varchar。

  4. DATE

     日期。內容是"YYYY-MM-DD"(包含年份，月份跟日期)

  5. BLOB(Binary Large OBjects)

     可以用來儲存圖片之類的東西。

- Table

  一些 database 的指令(詳見`Udemy.sql`)：

  - auto_increment

    這個是會隨著欄位增加，自動增加數字的部分，如 102, 103, 104...。

  - Not null

    該欄位不可以是空白的。

  - default

    後面可以加入想加的部分，當沒有輸入數值或字元時，這個就是預設的數值或字元。

## Reference

進度條：

https://www.youtube.com/watch?v=hpDTlbWiWq8&list=PL2SrkGHjnWcy0n1bNe5sAPB3snlGmdpkV&index=9

---

# MongoDB

- 開啟 MongoDB

  > brew services start mongodb-community@5.0

- 關閉 MongoDB

  > brew services stop mongodb-community@5.0

- 確認 MongoDB 是否有在執行

  > brew services list

- 建構一個 database folder 給 MongoDB(for 不同專案要確認 folder 對應位置)

  > mongod --dbpath /SQL/MongoDB/

- 進入 MongoDB Shell

  > mongo

- 查看目前 db 使用情形(要先使用 mongo 進入 MongoDB shell)

  > show dbs

- 確認在哪個資料庫(要先使用 mongo 進入 MongoDB shell)

  > db

- 確認要使用哪個資料庫(要先使用 mongo 進入 MongoDB shell)

  > use <這邊輸入要使用的資料庫 or 創建新的>

  `這邊要補充的是：假設你想創建新的db但是他們沒有的話，Mongodb會自動幫你創建一個 `

- 查看目前資料庫裡面有什麼(要先使用 mongo 進入 MongoDB shell)

  > show collections

MongoDB Crash Course Ref:https://www.youtube.com/watch?v=-56x56UppqQ

## MongoDB CRUD

在創建的 db 裡先使用

> use <欲使用的 db>

之後可以直接創建對應的 table，這邊用`students`(沒有的話，他會自動新增一個)：

> db.students

1.  Insertion(Create)

    - 之後想加入一個物件可以輸入：

      > db.students.insertOne({物件內容})

      例子：

      > db.students.insertOne({name:"Rush", age:29, major:"EE", Scholarship:{merit:3400, other:2500}})

      當加入之後，該物件前面會有一個特別的 ID，這同等於 SQL 裡面的 primary key(唯一的)。

    - 若是想加入多個，可以使用：

      > db.students.insertMany([{欲加入的物件一},{欲加入的物件二},{欲加入的物件三}])

    - 把上述兩種集結起來就是：

      > db.students.insert({欲新增的物件})

      這邊可以輸入一個或是多個物件。

      `但是假如用這個的話，回傳的訊息就沒有上述兩個多，所以最好還是用最上面的比較可以判斷`

2.  Find(Read)

    而要確認該物件是否有進去，
    可以輸入：

    > db.students.find()

    或是

    > db.students.find({})

    另外若是想單純找特定的資訊的話，可以使用：

    > db.students.find( {`該資訊及內容`} )

    <mark>Advanced finding<mark/>

    假如想找物件裡面的物件的內容(在這邊像是)，可以使用：

    > db.students.find({物件.物件裡的物件:物件的物件的內容})
    > 例子：
    > db.students.find({"Scholarship.merit":3400})

    就可以找尋到物件的物件裡的內容了。
    這邊得到的結果也被稱為 `Nested object(含該物件完整內容)`。

    但是除了 set 外，也可以查找一些值大於或小於特定職的情況，
    這邊可以查看這個頁面：https://www.mongodb.com/docs/manual/reference/operator/query-comparison/?_ga=2.117251141.2134925342.1655866178-2088865431.1655866178

3.  Update

    跟 insert 一樣，可以使用 `updateOne` 或是 `updateMany`，
    這邊單純修改一個物件，可以輸入：

    > db.students.updateOne({name:"Wilson"}, {$set:{name:"Wilson Ru", age:28}, $currentDate:{lastModified:true}})

    這樣整體就可以修改成後面的版本。

    也因此表示 update 有三個參數：1.想被修改的項目、2.想更新的內容、3.修改時間(可加可不加)。

    補充：使用`updateOne`可以修改 db 裡第一個搜尋到的物件，但是使用`updateMany`可以修改 db 裡所有搜尋到的物件(其他部分跟 updateOne 一樣)。

4.  Delete

    跟 update 一樣，可以使用 `deleteOne` 或是 `deleteMany`。

# Mongoose

- Mongoose is a `ODM(Object Document Modeling)` that is used to connect MongoDB to our web projects.
- SQL used `ORM(Object Relational Modeling)`, NoSQL uses ODM.
- It's a module in npmjs
