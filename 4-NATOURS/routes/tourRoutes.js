// const express = require('express');

// const tourController = require('../controllers/tourController');


// const router = express.Router();

// router.route('/')
//     .get(tourController.getAllTours)
//     .post(tourController.createTour);

// router.route('/:id')
//     .get(tourController.getTour)
//     .patch(tourController.updateTour)
//     .delete(tourController.deleteTour);

// module.exports = router;

















//2ND way, is similar to React.js
const express = require('express');

const { getAllTours, createTour, getTour, updateTour, deleteTour } = require('../controllers/tourController');


const router = express.Router();

router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;