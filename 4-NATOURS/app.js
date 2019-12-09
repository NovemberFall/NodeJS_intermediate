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






















const fs = require('fs');
const express = require('express');

const app = express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//try to use json
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
})



const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});