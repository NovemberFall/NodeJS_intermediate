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

















// //2ND way, is similar to React.js
// const express = require('express');

// const { checkID, getAllTours, createTour, getTour, updateTour, deleteTour } = require('../controllers/tourController');


// const router = express.Router();
// router.param('id', checkID);

// router.route('/')
//     .get(getAllTours)
//     .post(createTour);

// router.route('/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour);

// module.exports = router;





























//Chainning multiple middleware
const express = require('express');

const {
    checkID,
    checkBody,
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour
} = require('../controllers/tourController');


const router = express.Router();
router.param('id', checkID);

//Create a checkBody middleware
//Check if body contains the name and price property
//if not, send back 400(bad request)
//Add it to the post handler stack


router.route('/')
    .get(getAllTours)
    .post(checkBody, createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;