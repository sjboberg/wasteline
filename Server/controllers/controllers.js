var dbHandlers = require('../db/dbHandlers.js');

exports.addItem = {
  post: (req, res) => {
    dbHandlers.addItem(req.body.name, req.body.category, req.body.clean, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    });
  }
}
