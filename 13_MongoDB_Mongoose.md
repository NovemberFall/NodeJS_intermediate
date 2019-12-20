## Connecting Our Database with the Express App
![](img/2019-12-20-09-30-23.png)
- This time, choose connect to our application
![](img/2019-12-20-09-31-12.png)
- COPY
- back to our application
- let's configure
![](img/2019-12-20-09-35-50.png)
- lte's install mongoose
![](img/2019-12-20-09-36-49.png)

### update server.js
```js
//Connecting Our Database with the Express App
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log(con.connection);
    console.log('DB connection successful!');
})

const app = require('./app');



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
![](img/2019-12-20-13-59-50.png)
---
### update server.js
```js
//Connecting Our Database with the Express App
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successful!');
})

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
![](img/2019-12-20-14-00-32.png)
---

### update server.js
```js
//Connecting Our Database with the Express App
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successful!');
})

// mongoose.connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('DB connection successful!');
// })


const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
---

### now we delete tours from Cluster0, 
![](img/2019-12-20-14-12-09.png)
- click collections
![](img/2019-12-20-14-12-42.png)
- drop tours
---


## What is Mongoose?
![](img/2019-12-20-14-17-59.png)
---



## Creating a Simple Tour Model