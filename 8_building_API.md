## Using 3rd-Party Middleware
#### `Morgan` which is a very popular logging middleware
- let's install it
- `npm i morgan `
![](img/2019-12-18-13-22-09.png)
![](img/2019-12-18-13-23-17.png)
- now we installed it.

- input `morgan github` on browser
- click index.js
- see the morgan function
![](img/2019-12-18-13-31-00.png)
- inside morgan function, it return:
```js
return function logger (req, res, next) {
    // request data
    req._startAt = undefined
    req._startTime = undefined
    req._remoteAddress = getip(req)

    // response data
    res._startAt = undefined
    res._startTime = undefined

    // record request start
    recordStartTime.call(req)

    function logRequest () {
      if (skip !== false && skip(req, res)) {
        debug('skip request')
        return
      }

      var line = formatLine(morgan, req, res)

      if (line == null) {
        debug('skip line')
        return
      }

      debug('log request')
      stream.write(line + '\n')
    };

    if (immediate) {
      // immediate log
      logRequest()
    } else {
      // record response start
      onHeaders(res, recordStartTime)

      // log when response finished
      onFinished(res, logRequest)
    }

    next()
  }
}
```
- now let's use morgan function to test middleware (app.js)
```js
//Using 3rd-Party Middleware ----- morgan
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

//1. middleware
app.use(morgan('dev'));
app.use(express.json()); //middleware, 中间件

app.use((req, res, next) => { //middleware
    console.log('Hello from the middleware 🐳');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
```
![](img/2019-12-18-13-35-35.png)
![](img/2019-12-18-13-35-49.png)
- we get the above info `GET /api/v1/tours 200 3.354 ms - 8744`