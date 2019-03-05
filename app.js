const express = require('express');
const mysql = require('mysql');
const path = require('path');
const http = require('http');
const app = express();
const port = 1337;

app.use(express.static('site'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "site", "index.html"));	
});

app.get("/site/comp4711/6/Quiz", (req, res) => {
	console.log("Connected!");
	let con = mysql.createConnection({
        host: "localhost",
         user: "root",
         password:"PikAleex619!",
         database:"mydb"
	});
	
	con.connect(function(err){
        if (err) throw err;
         console.log("Connected!");
     
         con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
             if (err) throw err;
             console.log("Database created");
         });
     
         con.query("DROP TABLE IF EXISTS questions", function(err, result) {
             if (err) throw err;
             console.log("Table dropped");
         });
     
         let questions = "CREATE TABLE questions (q VARCHAR(255) PRIMARY KEY, ansa VARCHAR(255) NOT NULL, ansb VARCHAR(255) NOT NULL, ansc VARCHAR(255) NULL, ansd VARCHAR(255) NULL)";
         con.query(questions, function (err, result) {
             if (err) throw err;
             console.log("Table created");
         });
     
        //  let insertQ = "INSERT INTO questions (q, ansa, ansb, ansc, ansd) VALUES ?";
        //  let values = [];
        //  for (let i = 0; i < 5; ++i) {
        //      let tmp = [];
        //      tmp.push(quiz.qlist[i].question);
        //      for (let j = 0; j < quiz.qlist[i].answers.length; ++j) {
        //          tmp.push(quiz.qlist[i].answers[j]);
        //      }
        //      if (quiz.qlist[i].answers.length < 4) {
        //          for (let k = 0; k < (4 - quiz.qlist[i].answers.length); ++k)
        //              tmp.push(null);
        //      }
        //      values.push(tmp);
        //  }
     
        //  con.query(insertQ, [values], function(err, result) {
        //      if (err) throw err;
        //      console.log("Number of records inserted: " + result.affectedRows);
        //  });
     });
});

let server = http.createServer(app);
server.listen(port, () => console.log('listening from port 1337'));