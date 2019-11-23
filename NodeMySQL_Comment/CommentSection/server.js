const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);

        var conn = con.getConnection();

        conn.query('SELECT * FROM test.comments', function (error, results, fields) {
            if (error) {
                throw error;
            }
            results.forEach((comment) => {
                console.log("The comments are: " + comment.comment);
            });
        });

        conn.end();
    }
    else if (req.method == 'GET' && req.url == '/styles/customStyles.css') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/css');
        fs.createReadStream('./styles/customStyles.css').pipe(res);
    }
    else if (req.method == 'GET' && req.url == '/functions.js') {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fs.createReadStream("./functions.js").pipe(res);
    }
    else if (req.method == "GET" && req.url == '/home') {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'application/json');

        var conn = con.getConnection();

        conn.query('SELECT * FROM test.comments', function (error, results, fields) {
            if (error) {
                throw error;
            }
            var comments = JSON.stringify(results);
            res.end(comments);
        });
        conn.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});