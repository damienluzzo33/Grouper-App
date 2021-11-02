//* Set up authorization middleware
const authorization = async (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
	} else {
    next()
	}
};

module.exports = authorization;
