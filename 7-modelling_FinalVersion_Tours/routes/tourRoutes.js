const express = require('express');

const {
    // checkID,
    // checkBody,
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
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;