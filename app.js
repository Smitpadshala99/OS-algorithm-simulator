// Importing necessary modules
const express = require("express");
const mysql = require('mysql');

//creating an instance of express()
const app = express();

//creatin middlewares 
app.use(express.json()); //to parse JSON data
app.use(express.static("public")); //to serve static files

//create a connection object to create database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Smit1#4!1"
});

// start the server and listen for incoming requests at port 3000
app.listen(3000,function(){
  console.log("Server started");
});

// route to serve the index.html file
app.get("/"), (req,res) => {
  res.sendFile('index.html');
}

//checking the connection to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// handle POST request to /endpoint1
app.post("/endpoint1", async (req, res) => {
  try {
    // extract the processes array from the request body
    const {processes} = req.body;

    // create an array of values to be inserted into the table
    const values = [];
    for(var j=0; j<processes.length; j++){
      values[j] = Object.values(processes[j]);
    }

    console.log(processes);
    
    // create a new database if it doesn't already exist
    con.query("CREATE DATABASE if not exists ppdb", function (err, result) {
      if (err) throw err;
      console.log("Database Created");
    });

    // use the ppdb database
    con.query("use ppdb", function (err, result) {
      if (err) throw err;
    });

    // get the number of tables in the ppdb database
    var tableCount = 0;
    con.query("SELECT count(*) from information_schema.tables where table_schema = 'ppdb'", function (err, result) {
      if (err) throw err;
      tableCount = Number(result[0]['count(*)']);

      // increment the table count and create a new table based on the count
      tableCount++;
      con.query('CREATE TABLE if not exists '+`pps${tableCount}` +" (Process_ID VARCHAR(5) primary key, Arrival_Time float, Brust_Time float, Priority float, Response_Time float, Completion_Time float, Turnaround_Time float, Waiting_Time float)", function (err, result) {
        if (err) throw err;
        console.log("Table Created");
      });

      // insert the values into the table
      con.query("INSERT INTO "+`pps${tableCount}`+" VALUES ?", [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });  
  } catch (error) {
  }
});

// handle POST request to /endpoint2
app.post("/endpoint2", async (req, res) => {
  try {
    
    // extract the requests array from the request body
    const {requests} = req.body;

    // create an array of values to be inserted into the table
    const values = [];
    for(var j=0; j<requests.length; j++){
      values[j] = Object.values(requests[j]);
    }

    console.log(requests);
    
    // create a new database if it doesn't already exist
    con.query("CREATE DATABASE if not exists fcfsdb", function (err, result) {
      if (err) throw err;
      console.log("Database Created");
    });

    // use the fcfsdb database
    con.query("use fcfsdb", function (err, result) {
      if (err) throw err;
    });

    // get the number of tables in the fcfsdb database
    var tableCount = 0;
    con.query("SELECT count(*) from information_schema.tables where table_schema = 'fcfsdb'", function (err, result) {
      if (err) throw err;
      tableCount = Number(result[0]['count(*)']);

      // increment the table count and create a new table based on the count
      tableCount++;
      con.query('CREATE TABLE if not exists '+`disk${tableCount}` +" (RequestNo int primary key, Position float, HeadMovement float)", function (err, result) {
        if (err) throw err;
        console.log("Table Created");
      });

       // insert the values into the table
      con.query("INSERT INTO "+`disk${tableCount}`+" VALUES ?", [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });  
  } catch (error) {
  }
});

// handle POST request to /endpoint2
app.post("/endpoint3", async (req, res) => {
  try {
    // extract the requests array from the request body
    const {pages} = req.body;

    // create an array of values to be inserted into the table
    const values = [];
    for(var j=0; j<pages.length-1; j++){
      values[j] = Object.values(pages[j]);
    }

    //values for result array
    const ans = Object.values(pages[pages.length-1]);
    console.log(ans);

    // create a new database if it doesn't already exist
    con.query("CREATE DATABASE if not exists oprdb", function (err, result) {
      if (err) throw err;
      console.log("Database Created");
    });

    // use the oprdb database
    con.query("use oprdb", function (err, result) {
      if (err) throw err;
    });

    // get the number of tables in the oprdb database
    var tableCount = 0;
    con.query("SELECT count(*) from information_schema.tables where table_schema = 'oprdb'", function (err, result) {
      if (err) throw err;
      tableCount = Number(result[0]['count(*)']);

      //creating input and result tables based on the number of tables in the database
      tableCount = tableCount/2 + 1;
      con.query('CREATE TABLE if not exists '+`input${tableCount}` +" (Pages int, Frames varchar(100))", function (err, result) {
        if (err) throw err;
        console.log("Table Created");
      });
      con.query('CREATE TABLE if not exists '+`result${tableCount}` +" (MissCount int, HitCount int, HitRatio float, MissRatio float)", function (err, result) {
        if (err) throw err;
        console.log("Ans Table Created");
      });

      // insert the values into the input table
      con.query("INSERT INTO "+`input${tableCount}`+" VALUES ?", [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

      //// insert the values into the output table
      con.query("INSERT INTO "+`result${tableCount} (MissCount, HitCount, HitRatio, MissRatio)`+" VALUES ("+ans+")", function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });  
  } catch (error) {
  }
});