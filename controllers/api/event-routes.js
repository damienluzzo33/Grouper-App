//* import the express router and the event model
const router = require('express').Router();
const { Event, User } = require('../../models');

//* CREATE new event
router.post('/', async (req, res) => {
    try {
        const dbEventData = await Event.create({
            location: req.body.location,
            event_date: req.body.eventDate,
            start_time: req.body.startTime,
            end_time: req.body.endTime,
            event_category: req.body.eventCategory,
            user_id: req.session.userId
        });

        // if (!(location && event_date && start_time && end_time && event_category && )) {

        // }

        res.status(200).json(dbEventData);
        
    } catch (err) {
        res.status(400).json(err);
    }
})