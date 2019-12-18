# NodeJS
Node_Js guide

- `brew install node`


### about `__filename`
- for example:
- app.js
```js
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});
```
![](img/2019-12-18-11-07-55.png)
