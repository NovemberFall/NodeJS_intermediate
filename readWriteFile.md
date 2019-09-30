### Reading and Writing Files

- reading and writing from files
```js
const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)
```

`The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄`
---

---
### writting files
```js
//reading and writing from files
const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `this is what we know about avocado: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written')
```
![](img/2019-09-24-12-30-13.png)
---



---
### Reading and Writing Files Asynchronously

```js
//Non-blocking, asynchronous
const fs = require('fs');
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log('Will read file!')
```
![](img/2019-09-29-21-18-05.png)
---






