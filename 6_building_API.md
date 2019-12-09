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
---



### Handling POST Requests
```js
//Handling POST method
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware, 中间件

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

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

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.send('Done');
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```

- click Collections, + New Collection
- click save
![](img/2019-12-09-09-51-22.png)
![](img/2019-12-09-09-53-05.png)
![](img/2019-12-09-09-54-29.png)
- 这里我们使用Postman
- POST method
![](img/2019-12-09-09-55-18.png)
- click save
![](img/2019-12-09-09-57-50.png)
![](img/2019-12-09-09-57-59.png)
- use POST
- choose body
- click raw
```json
{
	"name": "Test Tour",
	"duration": 10,
	"difficulty": "easy"
}
```
![](img/2019-12-09-10-01-59.png)
- since our POST method, `console.log(req.body)`
![](img/2019-12-09-10-03-14.png)
- remember, when I click `send` on Postman, then our terminal console 
```js
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
App running on port 3000...
{ name: 'Test Tour', duration: 10, difficulty: 'easy' }
```
- because I send API to our node.js server
- if we don't use `app.use(express.json()); //middleware, 中间件`
- we can't receive json data
- let's do it
```js
//Handling POST method
const fs = require('fs');
const express = require('express');

const app = express();
// app.use(express.json()); //middleware, 中间件

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
```
![](img/2019-12-09-10-27-00.png)
- for here, we don't have middleware, so we get `undefined`
- if we use vscode Colonize plugin, we get the same result
![](img/2019-12-09-10-28-05.png)

- now try to add a new object with json string
```js
//Handling POST method
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware, 中间件

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

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

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            });
        }
    )
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```
![](img/2019-12-09-10-49-34.png)
- so we send the request
- we try to send twice
![](img/2019-12-09-10-53-26.png)
- id 9, id 10, that means we have sent twice
![](img/2019-12-09-10-54-00.png)
- the result is 11, since `results: tours.length`
