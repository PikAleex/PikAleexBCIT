const express = require('express');
const mysql = require('mysql');
const path = require('path');
const url = require('url');
const http = require('http');
const app = express();
const port = 1337;

// app.listen(port, () => {
//     console.log('listening');
// });

//app.use(express.static('quiz'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/quiz", (req, res) => {
    console.log(req.query.code);
    let list = JSON.parse(req.query.code);
    res.send("WTF");
});

app.get("/lab6/submit", (req, res) => {
    let qlist = JSON.parse(req.query.questions);

	let con = mysql.createConnection({
        host: "localhost",
         user: "root",
         password:"PikAleex619!",
         database:"mydb_lab6"
	});
	
	con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
     
         con.query("CREATE DATABASE IF NOT EXISTS mydb_lab6", function (err, result) {
             if (err) throw err;
             console.log("Database created");
         });
     
        //  con.query("DROP TABLE IF EXISTS questions", function(err, result) {
        //      if (err) throw err;
        //      console.log("Table dropped");
        //  });
     
         let questions = "CREATE TABLE IF NOT EXISTS questions (q VARCHAR(255) PRIMARY KEY, ansa VARCHAR(255) NOT NULL, ansb VARCHAR(255) NOT NULL, ansc VARCHAR(255) NULL, ansd VARCHAR(255) NULL)";
         con.query(questions, function (err, result) {
             if (err) throw err;
             console.log("Table created");
         });
    
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
        let insertQ = "INSERT INTO questions (q, ansa, ansb, ansc, ansd) VALUES ?";
         con.query(insertQ, [values], function(err, result) {
             if (err) throw err;
             console.log("Number of records inserted: " + result.affectedRows);
         });

         res.sendStatus(200);
        // let selectsql = "SELECT * FROM questions";
        // con.query(selectsql, (err, result) => {
        //     if (err) throw err;
        //     res.send(result);
        // });
    });
});

app.get("/lab6/retrieve", (req, res) => {

	let con = mysql.createConnection({
        host: "localhost",
         user: "root",
         password:"PikAleex619!",
         database:"mydb_lab6"
	});

	con.connect((err) => {
        if(err) return;

        let selectsql = "SELECT * FROM questions";
        con.query(selectsql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
});

let server = http.createServer(app);
server.listen(port, () => console.log('listening from port 1337'));