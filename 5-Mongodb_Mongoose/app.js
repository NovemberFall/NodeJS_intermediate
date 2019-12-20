//Connecting Our Database with the Express App
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1. middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// app.use(morgan('dev'));

app.use(express.json()); //middleware, 中间件
app.use(express.static(`${__dirname}/public`));//set public to be root folder, thus we don't need to input `public/`
//中间件获得静态文件
//middleware, which get the static files

app.use((req, res, next) => { //middleware
    console.log('Hello from the middleware 🐳');
    next();
});

app.use((req, res, next) => {//middleware
    req.requestTime = new Date().toISOString();
    next();
});

//3. ROUTE




app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;   
