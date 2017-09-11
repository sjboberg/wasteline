var pool = require('./dbConnection.js');

exports.getAllItems = (cb) => {
  var query = 'SELECT * FROM items;';
  pool.query(query, function (err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows);
    }
  });
};