var dbHandlers = require('../db/dbHandlers.js');

dbHandlers.getAllItems((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});