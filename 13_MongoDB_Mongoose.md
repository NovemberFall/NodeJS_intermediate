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
- update server.js
```js
//Creating a Simple Tour Model
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

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a nme'],
        unique: true //we can't have tour documents with the same name
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});
const Tour = mongoose.model('Tour', tourSchema);


const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
---

## Creating Documents and Testing the model
- update server.js
```js
//Creating Documents and Testing the model
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

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a nme'],
        unique: true //we can't have tour documents with the same name
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});
const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'The Forest Hiker',
    rating: 4.7,
    price: 497
});

//save the tours collection into the database, save() return a promise
testTour.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log('ERROR ❌:', err);
});

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
![](img/2019-12-24-10-03-43.png)

- if we insert this testTour agian, it will generate error, since name is unique
- but what if we insert a new tour, without price, see what happen:
```js
const testTour = new Tour({
    name: 'The Park Camper'
});
```
![](img/2019-12-24-14-55-52.png)
- that error: A tour must have a value
```js
const testTour = new Tour({
    name: 'The Park Camper',
    price: 997
});
```
![](img/2019-12-24-15-04-22.png)
- for here, we didn't set rating, but its default is 4.5
```js
    rating: {
        type: Number,
        default: 4.5
    },
```
- thus, we get the rating's value is 4.5
![](img/2019-12-24-15-06-39.png)
---



