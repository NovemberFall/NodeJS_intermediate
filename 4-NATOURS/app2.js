// //Implementing the Users Rotues
// const fs = require('fs');
// const express = require('express');
// const morgan = require('morgan');

// const app = express();

// //1. middleware
// app.use(morgan('dev'));
// app.use(express.json()); //middleware, 中间件

// app.use((req, res, next) => { //middleware
//     console.log('Hello from the middleware 🐳');
//     next();
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );


// //2. ROUTE HANDLERs


// const getAllTours = (req, res) => {
//     console.log(req.requestTime);

//     res.status(200).json({
//         status: 'success',
//         requestedAt: req.requestTime,
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     });
// };

// const getTour = (req, res) => {
//     console.log(req.params);
//     console.log(req.params.id);
//     console.log(typeof (req.params.id));

//     const id = req.params.id * 1;
//     console.log("after converting..." + typeof (id));

//     const tour = tours.find(el => (el.id === id));
//     if (!tour) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour
//         }
//     });
// };

// const createTour = (req, res) => {
//     // console.log(req.body);

//     const newId = tours[tours.length - 1].id + 1;
//     const newTour = Object.assign({ id: newId }, req.body);

//     tours.push(newTour);
//     fs.writeFile(
//         `${__dirname}/dev-data/data/tours-simple.json`,
//         JSON.stringify(tours),
//         err => {
//             res.status(201).json({
//                 status: 'success',
//                 data: {
//                     tour: newTour
//                 }
//             });
//         }
//     );
// };

// const updateTour = (req, res) => {
//     if (req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<Updated tour here...>'
//         }
//     });
// };

// const deleteTour = (req, res) => {
//     if (req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(204).json({//204 means not content
//         status: 'success',
//         data: null
//     });
// };

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const getUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const createUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const updateUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const deleteUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };



// /*try to use json*/

// // app.get('/api/v1/tours', getAllTours);
// // app.post('/api/v1/tours', createTour);
// // app.get('/api/v1/tours/:id', getTour);
// // app.patch('/api/v1/tours/:id', updateTour);
// // app.delete('/api/v1/tours/:id', deleteTour);

// //3. ROUTE
// app.route('/api/v1/tours')
//     .get(getAllTours)
//     .post(createTour);

// app.route('/api/v1/tours/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour);

// app.route('/api/v1/users')
//     .get(getAllUsers)
//     .post(createUser);

// app.route('/api/v1/users/:id')
//     .get(getUser)
//     .patch(updateUser)
//     .delete(deleteUser);

// //4. START SERVE    
// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });




































// //Creating and Mounting Multiple Routers
// const fs = require('fs');
// const express = require('express');
// const morgan = require('morgan');

// const app = express();

// //1. middleware
// app.use(morgan('dev'));
// app.use(express.json()); //middleware, 中间件

// app.use((req, res, next) => { //middleware
//     console.log('Hello from the middleware 🐳');
//     next();
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );


// //2. ROUTE HANDLERs


// const getAllTours = (req, res) => {
//     console.log(req.requestTime);

//     res.status(200).json({
//         status: 'success',
//         requestedAt: req.requestTime,
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     });
// };

// const getTour = (req, res) => {
//     console.log(req.params);
//     console.log(req.params.id);
//     console.log(typeof (req.params.id));

//     const id = req.params.id * 1;
//     console.log("after converting..." + typeof (id));

//     const tour = tours.find(el => (el.id === id));
//     if (!tour) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour
//         }
//     });
// };

// const createTour = (req, res) => {
//     // console.log(req.body);

//     const newId = tours[tours.length - 1].id + 1;
//     const newTour = Object.assign({ id: newId }, req.body);

//     tours.push(newTour);
//     fs.writeFile(
//         `${__dirname}/dev-data/data/tours-simple.json`,
//         JSON.stringify(tours),
//         err => {
//             res.status(201).json({
//                 status: 'success',
//                 data: {
//                     tour: newTour
//                 }
//             });
//         }
//     );
// };

// const updateTour = (req, res) => {
//     if (req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<Updated tour here...>'
//         }
//     });
// };

// const deleteTour = (req, res) => {
//     if (req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(204).json({//204 means not content
//         status: 'success',
//         data: null
//     });
// };

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const getUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const createUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const updateUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };

// const deleteUser = (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'This route is not yet defined!'
//     });
// };



// /*try to use json*/

// // app.get('/api/v1/tours', getAllTours);
// // app.post('/api/v1/tours', createTour);
// // app.get('/api/v1/tours/:id', getTour);
// // app.patch('/api/v1/tours/:id', updateTour);
// // app.delete('/api/v1/tours/:id', deleteTour);

// //3. ROUTE
// const tourRouter = express.Router();
// const userRouter = express.Router();

// tourRouter.route('/')
//     .get(getAllTours)
//     .post(createTour);

// tourRouter.route('/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour);

// userRouter.route('/')
//     .get(getAllUsers)
//     .post(createUser);

// userRouter.route('/:id')
//     .get(getUser)
//     .patch(updateUser)
//     .delete(deleteUser);

// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// //4. START SERVE    
// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });


































//A Better File Structure
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1. middleware
app.use(morgan('dev'));
app.use(express.json()); //middleware, 中间件

app.use((req, res, next) => { //middleware
    console.log('Hello from the middleware 🐳');
    next();
});

app.use((req, res, next) => {//middleware
    req.requestTime = new Date().toISOString();
    next();
});


/*try to use json*/

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//3. ROUTE




app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4. START SERVE    
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});