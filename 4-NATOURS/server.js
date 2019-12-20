// const app = require('./app2');
// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//     console.log(`${__dirname}`)
// });




























//Environment Variables
const dotenv = require('dotenv');
const app = require('./app2');

dotenv.config({ path: './config.env' });

//envrionment variables is global variables
// console.log(app.get('env')); 

//
console.log(process.env);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`${__dirname}`)
});