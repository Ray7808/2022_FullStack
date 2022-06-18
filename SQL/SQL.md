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

還沒寫＝\_=

---

## Reference

進度條：

https://www.youtube.com/watch?v=3K8nF5cocZU&list=PL2SrkGHjnWcy0n1bNe5sAPB3snlGmdpkV&index=5
