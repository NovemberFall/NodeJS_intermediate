## Intro to Back-End Architecture(建筑学): MVC, Types of Logic, and More
![](img/2019-12-24-15-46-05.png)
![](img/2019-12-24-15-55-25.png)
---


## Refactoring for MVC
- create a new folder
![](img/2019-12-24-17-11-01.png)
- tourModels.js
```js
const mongoose = require('mongoose');
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
module.exports = Tour;
```
- update tourRoutes.js
```js
const express = require('express');

const {
    // checkID,
    checkBody,
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour
} = require('../controllers/tourController');


const router = express.Router();

//checkID testing for middleware
// router.param('id', checkID);

router.route('/')
    .get(getAllTours)
    .post(checkBody, createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
```
- update tourController.js
```js
const Tour = require('./../models/tourModel');

//this checkID function we no longer need it, because we start working with the IDs that are coming 
//from MongoDB, and Mongo itself will give us an error if we use invalid ID, 
//this function really useful for showing you how middleware actually works
/* 
exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
}; 
*/

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
}

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
    });
};

exports.getTour = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof (req.params.id));

    const id = req.params.id * 1;
    console.log("after converting..." + typeof (id));
};

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
    });
};

exports.updateTour = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({//204 means not content
        status: 'success',
        data: null
    });
};
```
- update server.js
```js
//Refactoring for MVC
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successful!');
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```

