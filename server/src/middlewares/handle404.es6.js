module.exports = function() {
	return function (req, res) {
	  res.status(404).render('404', {title: 'Not Found :('});
	}
}