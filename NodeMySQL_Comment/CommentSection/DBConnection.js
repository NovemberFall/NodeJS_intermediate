// const mysql = require('mysql');

// const connect = () => {
//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "comments"
//     });
//     return con;
// }

// module.exports.connect = connect;










const mysql = require('mysql');

function getConnection() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    });
    return con;
}

module.exports.getConnection = getConnection;
