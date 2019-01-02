var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cproh"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS cproh", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql =
    "CREATE TABLE IF NOT EXISTS customers (id INT NOT NULL, firstname VARCHAR(255)NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, age INT, companyName VARCHAR(255))";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  //var sql = "INSERT INTO  users (id, firstname, lastname, email, age, companyName) VALUES (0, 'pippo','franco', 'pippo@gmail.com', 37, 'mycompany')"
  //con.query(sql, function (err, result) {
  //if (err) throw err;
  //console.log("1 record inserted");
  //});

  //var sql =
  // "INSERT INTO  users (id, firstname, lastname, email, age, companyName) VALUES (1, 'jim','jimmy', 'jim@gmail.com', 40, 'jimcompany')";
  //con.query(sql, function(err, result) {
  //if (err) throw err;
  //console.log("1 record inserted");
  //});

  //var sql =
  //"INSERT INTO  users (id, firstname, lastname, email, age, companyName) VALUES (2, 'john','johnny', 'johnny@gmail.com', 30, 'johnnycompany')";
  //con.query(sql, function(err, result) {
  //if (err) throw err;
  //console.log("1 record inserted");
  //});

  con.query("SELECT email FROM users ORDER BY age", function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
});
