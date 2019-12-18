// const express = require('express');

// const app = express();

// // app.get('/', (req, res) => {
// //     res.status(200).send('Hello from the server side!');
// // })

// //try to use json
// app.get('/', (req, res) => {
//     res.status(200).json({ //we can change code to 404
//         message: 'Hello from the server side!',
//         app: 'Natours'
//     });
// })

// app.post('/', (req, res) => {
//     res.send('You can post to this endpoint...');
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });





















// //handling get()
// const fs = require('fs');
// const express = require('express');

// const app = express();

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //try to use json
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     })
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });























// //Handling POST method
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //try to use json
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     })
//     console.log(tours.length);
// })

// app.post('/api/v1/tours', (req, res) => {
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
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });






























// //Responding to URL Parameters
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //try to use json
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     })
//     console.log(tours.length);
// })

// // app.get('/api/v1/tours/:id', (req, res) => {
// //     console.log(req.params);
// //     console.log(req.params.id);
// //     console.log(typeof (req.params.id));

// //     const id = req.params.id * 1;
// //     console.log("after converting..." + typeof (id));

// //     if (id > tours.length) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'Invalid ID'
// //         });
// //     }

// //     const tour = tours.find(el => (el.id === id));
// //     res.status(200).json({
// //         status: 'success',
// //         data: {
// //             tour
// //         }
// //     });
// // });


// app.get('/api/v1/tours/:id', (req, res) => {
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
// });

// app.post('/api/v1/tours', (req, res) => {
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
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });































// //Handing PATCH Requests
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //try to use json
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     })
//     console.log(tours.length);
// })

// app.get('/api/v1/tours/:id', (req, res) => {
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
// });

// app.post('/api/v1/tours', (req, res) => {
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
// });

// app.patch('/api/v1/tours/:id', (req, res) => {
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
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });





































// //Handing DELETE Requests
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //try to use json
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours: tours
//         }
//     })
//     console.log(tours.length);
// })

// app.get('/api/v1/tours/:id', (req, res) => {
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
// });

// app.post('/api/v1/tours', (req, res) => {
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
// });

// app.patch('/api/v1/tours/:id', (req, res) => {
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
// });

// app.delete('/api/v1/tours/:id', (req, res) => {
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
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });
































// //Refactoring Our Routes
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//     res.status(200).json({
//         status: 'success',
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

// /*try to use json*/

// // app.get('/api/v1/tours', getAllTours);
// // app.post('/api/v1/tours', createTour);
// // app.get('/api/v1/tours/:id', getTour);
// // app.patch('/api/v1/tours/:id', updateTour);
// // app.delete('/api/v1/tours/:id', deleteTour);

// app.route('/api/v1/tours')
//     .get(getAllTours)
//     .post(createTour);

// app.route('/api/v1/tours/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour);


// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });


































// //Create Our Own Middleware
// const fs = require('fs');
// const express = require('express');

// const app = express();
// app.use(express.json()); //middleware, 中间件

// app.use((req, res, next) => { //middleware
//     console.log('Hello from the middleware 🐳');
//     next();
// });


// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//     res.status(200).json({
//         status: 'success',
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

// /*try to use json*/

// // app.get('/api/v1/tours', getAllTours);
// // app.post('/api/v1/tours', createTour);
// // app.get('/api/v1/tours/:id', getTour);
// // app.patch('/api/v1/tours/:id', updateTour);
// // app.delete('/api/v1/tours/:id', deleteTour);

// app.route('/api/v1/tours')
//     .get(getAllTours)
//     .post(createTour);

// app.route('/api/v1/tours/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour);


// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });

















//Create Our Own Middleware
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware, 中间件

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    });
};

const getTour = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof (req.params.id));

    const id = req.params.id * 1;
    console.log("after converting..." + typeof (id));

    const tour = tours.find(el => (el.id === id));
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};

const createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
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

const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    });
};

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(204).json({//204 means not content
        status: 'success',
        data: null
    });
};

/*try to use json*/

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app.use((req, res, next) => { //middleware
    console.log('Hello from the middleware 🐳');
    next();
});

app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});