//* import the express router, as well as the user and event models
const router = require('express').Router();
const { User, Event } = require('../models');
const authorization = require('../util/auth');

//* get all events for homepage
router.get('/', async (req, res) => {
	try {
		const allEventData = await Event.findAll({
			include: [{ 
				model: User,
				foreignKey: 'user_id',
				as: 'user'
			}]
		});
		const events = allEventData.map((event) => event.get({ plain: true }));
        if (!events) {
            res.render('homepage', { events, loggedIn: req.session.loggedIn });
            return;
        }
		res.render('homepage', { events, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//* get the login page for the user
router.get('/login', async (req, res) => {
	try {
		if (!req.session.loggedIn) {
			res.render('login-signup');
			return;
		}
		res.render('homepage');
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//* get one event and use authorization middleware
router.get('/events/:id', authorization, async (req, res) => {
	try {
		const thisEventData = await Event.findByPk(req.params.id, {
			include: [{ 
				model: User,
				foreignKey: 'user_id',
				as: 'user'
			}]
		});
		const event = thisEventData.get({ plain: true });
		res.render('event', { event, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;