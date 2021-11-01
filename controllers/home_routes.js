//* import the express router, as well as the user and event models
const router = require('express').Router();
const { User, Event } = require('../models');

//* get all events for homepage
router.get('/', async (req, res) => {
	try {
		const allEventData = await Event.findAll({
			include: [ { model: User } ]
		});
		const events = allEventData.map((event) => event.get({ plain: true }));
		res.render('homepage', { events, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//* get one event and use authorization middleware
router.get('/events/:id', authorization, async (req, res) => {
	try {
		const thisEventData = await Event.findByPk(req.params.id, {
			include: [ { model: User } ]
		});
		const event = thisEventData.get({ plain: true });
		res.render('event', { event, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
