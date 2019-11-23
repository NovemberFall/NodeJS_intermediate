const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.method == 'GET' && req.url == '/styles/customStyles.css') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/css');
        fs.createReadStream('./styles/customStyles.css').pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});