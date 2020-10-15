const mysql = require('mysql')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_grocery2'
})

db.connect((err => {
    if (err) {
        throw err
    }
    console.log("mysql database connected")
}))
db.Promise = global.Promise;
global.db = db

module.exports = db