### Installing Postman
- install Postman for mac

- test: dog.ceo
![](img/2019-12-08-23-19-19.png)

- import a starter project 
![](img/2019-12-08-23-35-01.png)

- cd 4-NATOURS
- `npm init`
![](img/2019-12-08-23-39-45.png)

- we install express@4
- `npm i express@4`
![](img/2019-12-08-23-45-08.png)

- create an app.js
![](img/2019-12-08-23-53-11.png)

- 这里由于我已经装了 REST Client, 所以暂时不需要Postman, 个人感觉REST Client 比较好用
- create natours.http
- app.js
```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side!');
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```
![](img/2019-12-09-00-05-14.png)

- try to use json
```js
const express = require('express');

const app = express();

//try to use json
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the server side!',
        app: 'Natours'
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```
![](img/2019-12-09-00-14-31.png)
- if we change the code to 404
```js
app.get('/', (req, res) => {
    res.status(404).json({
        message: 'Hello from the server side!',
        app: 'Natours'
    });
})
```
![](img/2019-12-09-00-16-10.png)

- now try to use Post method
```js
app.post('/', (req, res) => {
    res.send('You can post to this endpoint...');
})
```
![](img/2019-12-09-00-22-28.png)
---


### APIS and RESTful API Design
#### Application Programming Interface: a piece of software that can be used by another piece of software, in order to allow applications to talk to each other
![](img/2019-12-09-00-29-11.png)
![](img/2019-12-09-00-43-32.png)


### Starting Our API: Handing GET Requests
- we have json data in folder data
- so we can read data from .json file
```js
const fs = require('fs');
const express = require('express');

const app = express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//try to use json
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    })
})



const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```
![](img/2019-12-09-01-08-13.png)
---


```js
//try to use json
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
})
```
- we have 9 results.
![](img/2019-12-09-01-10-48.png)
- but this is file-based API