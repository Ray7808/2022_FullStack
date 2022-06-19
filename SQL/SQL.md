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
