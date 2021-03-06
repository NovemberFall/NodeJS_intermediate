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
// const fs = require('fs')
// const http = require('http')
// const url = require('url')

// const server = http.createServer((req, res) => {
//     const pathName = req.url;

//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW')
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT')
//     } else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         })
//         res.end('<h1>Page not found!</h1>')
//     }
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// })






































// //Building a Simple API
// const fs = require('fs')
// const http = require('http')
// const url = require('url')


// const server = http.createServer((req, res) => {
//     const pathName = req.url;

//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW')
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathName === '/api') {

//         fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//             const productData = JSON.parse(data)
//             res.writeHead(200, {
//                 'Content-type': 'application/json'
//             })
//             res.end(data)
//         })
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         })
//         res.end('<h1>Page not found!</h1>')
//     }
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// })








// //build simple api, version 2
// const fs = require('fs')
// const http = require('http')
// const url = require('url')

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
// const dataObj = JSON.parse(data)

// const server = http.createServer((req, res) => {
//     const pathName = req.url;

//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW')
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathName === '/api') {

//         res.writeHead(200, { 'Content-type': 'application/json' })
//         res.end(data)
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         })
//         res.end('<h1>Page not found!</h1>')
//     }
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// })

























//Filling the Templates
const fs = require('fs')
const http = require('http')
const url = require('url')

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.id);
    output = output.replace(/{%ID%}/g, product.image);

    if (!product.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    }

    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' })

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output);

        //Product page
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')

        //API     
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(data)

        //Not found
    }
    else {
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