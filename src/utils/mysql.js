const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  database : 'test'
});

var getConnection = (callback) => {
  pool.getConnection((error, connection) => {
    if (error) throw new Error(error.message);
    
    callback(connection);
  });
};

module.exports = getConnection;
