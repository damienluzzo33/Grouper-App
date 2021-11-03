const { Event } = require('../models');

const eventData = [
  {
    location: 'Austin',
    event_name: 'event', 
    event_date: "October 10, 2021",
    start_time: "14:00",
    end_time: "18:00",
    event_category: "poker night",
    user_id: 1
  },
  {
    location: 'Austin',
    event_name: 'event', 
    event_date: "October 25, 2021",
    start_time: "16:00",
    end_time: "18:00",
    event_category: "study group",
    user_id: 4
  },
  {
    location: 'Zoom',
    event_name: 'online event', 
    event_date: "October 29, 2021",
    start_time: "17:00",
    end_time: "19:00",
    event_category: "board games",
    user_id: 2
  },
  {
    location: 'Austin',
    event_name: 'event', 
    event_date: "September 20, 2021",
    start_time: "12:00",
    end_time: "16:00",
    event_category: "smash bros",
    user_id: 3
  },
]

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent; 

