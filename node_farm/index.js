// const fs = require('fs');

// const hello = 'Hello world!';
// console.log(hello);













//reading and writing from files
// const fs = require('fs');

//Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `this is what we know about avocado: ${textIn}.\nCreate on ${Date.now()} `;
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written')
















//Non-blocking, asynchronous
// const fs = require('fs');

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })
// console.log('Will read file!')
































// //Creating a simple web server
// const fs = require('fs')
// const http = require('http')

// // SERVER
// const server = http.createServer((req, res) => {
//     console.log(reg)
//     res.end('Hello from the server!')
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// })






















//routing
const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})