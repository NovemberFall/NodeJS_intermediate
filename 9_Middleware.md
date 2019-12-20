## param Middleware
- print out `id`
- tourRoutes.js
```js
//2ND way, is similar to React.js
const express = require('express');

const { getAllTours, createTour, getTour, updateTour, deleteTour } = require('../controllers/tourController');


const router = express.Router();
router.param('id', (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    next();
});

router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
```
![](img/2019-12-19-16-50-52.png)
![](img/2019-12-19-16-51-09.png)
---

### since `id` is from param which is midlleware
- update tourController.js
```js
//param ID is Middleware
const fs = require('fs');
const tours = JSON.parse(
    // fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

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

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours: tours
        }
    });
};

exports.getTour = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof (req.params.id));

    const id = req.params.id * 1;
    console.log("after converting..." + typeof (id));

    const tour = tours.find(el => (el.id === id));

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};

exports.createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/../dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            });
        }
    );
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

---
- update tourRoutes.js
```js
//2ND way, is similar to React.js
const express = require('express');

const { checkID, getAllTours, createTour, getTour, updateTour, deleteTour } = require('../controllers/tourController');


const router = express.Router();
router.param('id', checkID);

router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
```
- now let's test some invalid id
![](img/2019-12-19-17-19-10.png)
- let's test valid id
![](img/2019-12-19-17-19-41.png)
---

