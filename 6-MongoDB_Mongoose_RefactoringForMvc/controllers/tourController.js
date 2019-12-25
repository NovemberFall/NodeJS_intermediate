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
        // results: tours.length,
        // data: {
        //     tours: tours
        // }
    });
};

exports.getTour = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof (req.params.id));

    const id = req.params.id * 1;
    console.log("after converting..." + typeof (id));

    // const tour = tours.find(el => (el.id === id));

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // });
};

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tour: newTour
        // }
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