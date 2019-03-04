const express = require('express');
const mysql = require('mysql');
const http = require('http');
const app = express();
const port = 1337;

app.use(express.static('website'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "website", "index.html"));	
});

let server = http.createServer(app);
server.listen(port, () => console.log('listening from port 1337'));