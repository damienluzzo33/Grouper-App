//* import the express router and the event model
const router = require('express').Router();
const authorization = require('../../util/auth');
const { Event, User } = require('../../models');

//* CREATE new event
router.post('/', authorization, async (req, res) => {
    try {
        const dbEventData = await Event.create({
            location: req.body.location,
            in_person: req.body.in_person,
            event_name: req.body.event_name,
            event_description: req.body.event_description,
            event_date: req.body.event_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            event_category: req.body.event_category,
            user_id: req.session.userId
        });

        if (!dbEventData) {
            res.status(404).json({ message: "Something went wrong. Please try again..." })
        }
        res.status(200).json(dbEventData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', authorization, async (req, res) => {
    try {
        const foundEvent = await Event.findByPk(req.params.id, {
            include: [{ 
				model: User,
				foreignKey: 'user_id',
				as: 'user'
			}]
        });
        if (!foundEvent) res.status(404).json({ message: "Event not found... try again!"});
        res.status(200).json({foundEvent, message: "Great Job! Enjoy the event!"})
    } catch (err) {
        res.status(400).json(err);
    }
})

//* DELETE an event
router.delete('/:id', authorization, async (req, res) => {
    try {
        const selectedEvent = await Event.destroy({
            where: {
                user_id: req.session.userId,
                id: req.params.id
            }
        })
        // const event = selectedEvent.get({ plain: true });
        if (!selectedEvent) {
            res.status(404).json({ message: "You can't delete this event... Try again." })
        }
        res.status(200).json({selectedEvent, message: "Event deleted successfully!" })
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;