const maria = require('mysql');
const conn = maria.createConnection({
    host:'localhost',
    port:3306,
    user:'gyoyeon',
    password:'1248',
    database:'Project'
});
module.exports = conn;