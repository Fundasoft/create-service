
const pool = require('../../utils/mysql');

class Service {
  static getSomething(cb) {
    pool((connection) => {
      connection.query('SELECT * FROM Usuario', (error, results) => {
        if (error) throw new Error(error.message);
        
        connection.release();

        return cb(results);
      });
    })
  }
}

module.exports = Service;
