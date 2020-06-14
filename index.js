const mysql = require("mysql")

//Create a connection
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
})

//connect to a database and connection also
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  connect.query("CREATE DATABASE Gaurav", (err) => {
    if (err) throw err
    console.log("database created")
  })
})

//CREATE TABLE
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  const sql = "CREATE TABLE customer (name VARCHAR(255), email VARCHAR(255))"
  connect.query(sql, (err) => {
    if (err) throw err
    console.log("Table created.........")
  })
})

//ALTER TABLE
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  const sql =
    "ALTER TABLE customer ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"
  connect.query(sql, (err) => {
    if (err) throw err
    console.log("Our table has been altered")
  })
})

//INSERT TABLE
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  const sql =
    "INSERT INTO customer (name,email) VALUES ('marry','marrydoe@gmail.com')"
  connect.query(sql, (err) => {
    if (err) throw err
    console.log("Data inserted into table.....")
  })
})

//INSERT TABLE MANY INTO TABLE
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  const sql = "INSERT INTO customer (name,email) VALUES ?"
  const values = [
    ["tim", "tim@gmail.com"],
    ["anglena", "anglena@gmail.com"],
    ["daisy", "daisy@gmail.com"],
  ]
  connect.query(sql, [values], (err, result) => {
    if (err) throw err
    console.log("Records Inserted", ":", result.affectedRows)
  })
})

// SELECT ALL
connect.connect((err) => {
  if (err) throw err
  console.log("database connected")
  const sql = "SELECT * FROM customer"
  connect.query(sql, (err, result, fields) => {
    if (err) throw err
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name + "|" + result[i].email)
    }
  })
})

// SELECT Specific
const sql = "SELECT name,id FROM customer"
connect.query(sql, (err, result, fields) => {
  if (err) throw err

  console.log(result)
})

//Where clause
const sql = "SELECT * FROM customer WHERE name LIKE 'J%'"
const sql = "SELECT * FROM customer WHERE name LIKE 'q%' OR id = 1"
const name = "a%"
const id = 1
const sql = "SELECT * FROM customer WHERE name LIKE ? OR id = ?"
connect.query(sql, [name, id], (err, result, field) => {
  if (err) throw err
  console.log(result)
})

//ORDER BY CLAUSE
const sql = "SELECT * FROM customer ORDER BY name"
connect.query(sql, (err, result, field) => {
  if (err) throw err
  console.log(result)
})

// DELETE CLAUSE
const sql = "DELETE FROM customer WHERE id = 1"
connect.query(sql, (err, result, field) => {
  if (err) throw err
  console.log(result)
})

// UPDATE
const sql = "UPDATE customer SET name = 'john P' WHERE name = 'john'"
const sql = "UPDATE customer SET name = 'john' WHERE id = 1"
const sql = "SELECT * FROM  customer "
connect.query(sql, (err, result, field) => {
  if (err) throw err
  console.log(result)
})

//LIMIT
const sql = "SELECT * FROM  customer LIMIT 2"
const sql = "SELECT * FROM  customer ORDER BY id DESC LIMIT 2 "
connect.query(sql, (err, result, field) => {
  if (err) throw err
  console.log(result)
})

// DROP
const sql = "DROP TABLE customer"
const sql = "DROP TABLE IF EXIST customer "
connect.query(sql, (err, result, field) => {
  if (err) throw err
  console.log(result)
})
