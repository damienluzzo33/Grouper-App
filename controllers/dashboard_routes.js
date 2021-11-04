//* import the express router and the event model
const router = require('express').Router();
const { Event, User } = require('../models');
const authorization = require('../util/auth');

//* get all user's events for user dashboard
router.get('/', authorization, async (req, res) => {
    try {
        let userEvents = await Event.findAll({
            where: {
                user_id: req.session.userId,
            },
        });

        let noEvents = false;
        let events = userEvents.map((event) => event.get({ plain: true }));

        if (events.length === 0) {
            noEvents = true;
            // res.status(200).json(sorted);
            res.render('dashboard', { noEvents: noEvents, loggedIn: req.session.loggedIn });
            return;
        }

        let sorted = events.sort((a,b) => {
            let firstEventArr = a.event_date.split('/');
            let secondEventArr = b.event_date.split('/');
            if (firstEventArr[2] !== secondEventArr[2]) {
                return parseInt(firstEventArr[2]) - parseInt(secondEventArr[2]);
            } else if (firstEventArr[1] !== secondEventArr[1]) {
                return parseInt(firstEventArr[1]) - parseInt(secondEventArr[1]);
            } else if (firstEventArr[0] !== secondEventArr[0]) {
                return parseInt(firstEventArr[0]) - parseInt(secondEventArr[0])
            } else return 0;
        });
        // res.status(200).json(sorted);
		res.render('dashboard', { sorted, noEvents: noEvents, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
		res.status(500).json(err);
    }
});

module.exports = router;