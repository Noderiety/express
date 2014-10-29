let controllers = require('require-directory')(module);

controllers.index = (req, res) => {
  res.render('index', {
    title: 'express-simple'
  });
};

module.exports = controllers;
