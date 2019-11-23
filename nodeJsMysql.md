### import bootstrap
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Comment Section</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/customStyles.css">
</head>
<body>
    <div class="container">
            <h1>Weclome</h1>

            <div id="comments" class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">Name: userName</h5>
                    <h6 class="card-subtitle text-muted">Date: 11/22/2019</h6><br>
                    This is where the comment will go!
                </div>
            </div>

            <hr>

            <div id="main-content">
                <h3>Leave your comments below!</h3>
                <div id="make-comment">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input style="width:250px;" class="form-control" type="text" id="name" Required>
                    </div>

                    <div class="form-group">
                        <label for="message">Type Comment Below!</label>
                        <textarea class="form-control" id="message" Required></textarea>
                    </div>
                    <button type="button" class="btn btn-success" onclick="insertComment()">Comment!</button>
                </div>
            </div>
    </div>
</body>
</html>
```
---

### create a customStyles.css
- update css
```css
body{
    background-color: #eed773;
}

h1 {
    text-align: center;
    margin-top: 55px;
    margin-bottom: 55px;
}

.card-body{
    background-color: #b6d463
}

#main-content{
    text-align: center;
    margin-top: 25px;
}

#name{
    margin: 0 auto;
}
```
---

### npm install node
- `npm install node`

- create a server.js
```js
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.method == 'GET' && req.url == '/styles/customStyles.css') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/css');
        fs.createReadStream('./styles/customStyles.css').pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
```
![](img/2019-11-22-19-35-18.png)
---
