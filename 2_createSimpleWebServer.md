### 

```js
//Creating a simple web server
const fs = require('fs');   //fs module stands for file system
                            //read from file
const http = require('http'); 

// SERVER
const server = http.createServer((req, res) => {
    res.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```
![](img/2019-09-30-05-43-27.png)
---

---
### Routing

```js
//routing
const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```
![](img/2019-09-30-06-03-29.png)
![](img/2019-09-30-06-03-44.png)
---
![](img/2019-09-30-06-04-37.png)
![](img/2019-09-30-06-04-50.png)
---

---
- updating
```js
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
    }

    res.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```
![](img/2019-09-30-07-49-31.png)
---
![](img/2019-09-30-07-50-07.png)
---

---
- if we comment this line 
- `res.end('Hello from the server!')`
```js
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    }

    // res.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```
![](img/2019-09-30-07-53-10.png)
- it doesn't know what are u doing

---
- update
```js
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else {
        res.end('Page not found!')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```
![](img/2019-09-30-07-57-40.png)
---

- update
```js
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else {
        res.writeHead(404)
        res.end('Page not found!')
    }
})
```
![](img/2019-09-30-08-00-38.png)
---
- open network
![](img/2019-09-30-08-00-58.png)
---

---
- update
```js
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
```
![](img/2019-09-30-08-05-51.png)
---
![](img/2019-09-30-08-06-26.png)
---
