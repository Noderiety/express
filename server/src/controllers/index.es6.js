let controllers = require('require-directory')(module);

controllers.index = (req, res) => {
  res.render('index', {
    title: 'Noderiety'
  });
};

controllers.error = (req, res) => {
	process.nextTick(() => {throw new Error('fail')})
};

controllers.authorized = (req, res) => {
  res.json(req.user)
};

module.exports = controllers;
