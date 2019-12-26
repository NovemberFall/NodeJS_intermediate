## final version for creating model
- update tourModel.js
```js
const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a nme'],
        unique: true, //we can't have tour documents with the same name
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
```
![](img/2019-12-25-15-23-02.png)
![](img/2019-12-25-15-22-49.png)
---
- It's basically there to ensure the strings you save through the schema are properly trimmed. If you add { type: String, trim: true } to a field in your schema, then trying to save strings like "  hello", or "hello  ", or "  hello  ", would end up being saved as "hello" in Mongo - i.e. white spaces will be trimmed.
---

## Importing Development Data
![](img/2019-12-25-17-46-38.png)
- create import-dev-data.js
```js
//Importing Development Data
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successful!');
})

//READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

//IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
}

console.log(process.argv);
```
![](img/2019-12-25-18-36-20.png)
-  The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. 
-  The second element will be the path to the JavaScript file being executed. 
---
-
- update import-dev-data.js
```js
//Importing Development Data
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successful!');
})

//READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

//IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded!');
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully loaded!');
        process.exit();
    } catch (err) {
        console.log(err);
    }
}

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
```
![](img/2019-12-25-18-44-16.png)
-
- now try to import
![](img/2019-12-25-19-11-12.png)
![](img/2019-12-25-19-11-43.png)
- and then, added these data into mongoDB
---


## Making the API Better: Filtering
- filter duration=5 & difficulty=easy, by building query string
- we can print query string first
- in tourController.js
- 
```js
exports.getAllTours = async (req, res) => {
    try {
        console.log(req.query); //print out query string
        const tours = await Tour.find();

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
- in moogoose.http
![](img/2019-12-25-19-48-30.png)
![](img/2019-12-25-19-48-48.png)
---
- update tourController.js
```js
exports.getAllTours = async (req, res) => {
    try {
        console.log(req.query);
        const tours = await Tour.find({
            duration: 5,
            difficulty: 'easy'
        });//for here, is hard code, for testing

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
![](img/2019-12-25-20-02-36.png)
- show 2 results, with difficult=easy & duration=5
-
- 2nd way to filter
- update tourController.js
```js
exports.getAllTours = async (req, res) => {
    try {
        console.log(req.query);

        const tours = await Tour.find()
            .where('duration').equals(5)
            .where('difficulty').equals('easy');

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
- 3rd way to filter
- update
```js
exports.getAllTours = async (req, res) => {
    try {
        console.log(req.query);

        const tours = await Tour.find(req.query);

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
![](img/2019-12-25-20-14-02.png)
---

- print out all query string and excluded elements
```js
exports.getAllTours = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        console.log(req.query, queryObj);

        const tours = await Tour.find(req.query);

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
![](img/2019-12-25-22-13-34.png)
![](img/2019-12-25-22-13-56.png)
---
-
- update
```js
exports.getAllTours = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        const tours = await Tour.find(queryObj);

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
- ignoreing all of these other fields
- after excluded these fields,
![](img/2019-12-25-22-19-44.png)
---
-
- refactoring
```js
//Making the API Better: Filtering
const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
    try {
        //BUILD QUERY
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        const query = Tour.find(queryObj);

        //EXECUTE QUERY
        const tours = await query;

        //SEND RESPONSE
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
```
