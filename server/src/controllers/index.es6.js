let controllers = require('require-directory')(module);

controllers.index = (req, res) => {
  res.render('index', {
    title: 'express-simple'
  });
};

controllers.error = (req, res) => {
	process.nextTick(() => {throw new Error('fail')})
};

module.exports = controllers;
