### build a very simple API

- index.js
```js
//Building a Simple API
const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName === '/api') {

        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            console.log(productData)
        })

        res.end('API')
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
```
![](img/2019-09-30-08-33-34.png)
---
![](img/2019-09-30-08-34-09.png)
---

---
- updating
```js
//Building a Simple API
const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName === '/api') {

        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, {
                'Content-type': 'application/json'
            })
            res.end(data)
        })
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
```
![](img/2019-09-30-08-37-04.png)
---

---
- version 2
```js
//build simple api, version 2
const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName === '/api') {

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data)
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
```
- this still work, the same result.

---

### HTML Templating: Building the Templates








