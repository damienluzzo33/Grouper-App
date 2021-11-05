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
		const weirdRoute = false;
		res.render('homepage', { events, weirdRoute: weirdRoute, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/create', authorization, async (req, res) => {
	try {
		const weirdRoute = false;
		res.render('create-event', {weirdRoute: weirdRoute, loggedIn: req.session.loggedIn});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
})

//* get the login page for the user
router.get('/login', async (req, res) => {
	try {
		if (!req.session.loggedIn) {
			res.render('login-signup');
			return;
		}
		const weirdRoute = false;
		res.render('homepage', {weirdRoute: weirdRoute});
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
		const mappedEvent = thisEventData.get({ plain: true });
		const owner = mappedEvent.user_id == req.session.userId;
		const weirdRoute = true;
		res.render('event', { mappedEvent, weirdRoute: weirdRoute, owner: owner, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//* get one event and use authorization middleware
// router.get('/events/saved/:id', authorization, async (req, res) => {
// 	try {
// 		let allSavedEvents = JSON.parse(localStorage.getItem('savedEvents'));

// 		const thisEventData = await Event.findByPk(req.params.id, {
// 			where: {
// 				id: req.params.id
// 			}
// 		});
// 		const mappedEvent = thisEventData.get({ plain: true });

// 		res.render('event', { mappedEvent, owner: owner, loggedIn: req.session.loggedIn });
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

module.exports = router;