/*
    name: SQL CONNECTOR
    path: db/mysql/connection.js
    Objective: In this file we made the connection of mySQL database with our server.
*/

const mysql = require('mysql')


// const db = mysql.createConnection({
//     // host: 'localhost',
//     // user: 'root',
//     // password: '',
//     // database: 'node_grocery2'
//     host: 'us-cdbr-east-02.cleardb.com',
//     user: 'bb5e40a33386b1',
//     password: '8981812c',
//     database: 'heroku_2e9b6dd752ebf23',
//     port: 3306
// })

// db.connect((err => {
//     if (err) {
//         throw err
//     }
//     console.log("mysql database connected")
// }))
var db  = mysql.createPool({
    connectionLimit : 10,
    host            : 'us-cdbr-east-02.cleardb.com',
    user            : 'bb5e40a33386b1',
    password        : '8981812c',
    database        : 'heroku_2e9b6dd752ebf23'
  });
db.Promise = global.Promise;
global.db = db

module.exports = db
