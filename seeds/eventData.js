const { Event } = require('../models');

const eventData = [
  {
    location: 'Emerald Tavern',
    in_person: true,
    event_name: 'Coffee + Board Games', 
    event_description: 'We will all be meeting at the Emerald Tavern for some coffee and we will playing Secret Hitler and Cards Against Humanity',
    event_date: "November 10, 2021",
    start_time: "16:00",
    end_time: "19:00",
    event_category: "board games",
    user_id: 1
  },
  {
    location: 'Cider Cade',
    in_person: true,
    event_name: 'Video Games + Beer',
    event_description: 'Come over to Cider Cade and join us for for some beer and video games. Only $10 to get in the doors!',
    event_date: "October 15, 2021",
    start_time: "18:00",
    end_time: "21:00",
    event_category: "video games",
    user_id: 4
  },
  {
    location: 'https://zoom.us/j/7150899434?pwd=eHBaTUlsK3lKLzlLaWRGaG9BMkN5UT09',
    in_person: false,
    event_name: 'Zoom Zoom Trivia Night',
    event_description: 'Join us for a socially distanced trivia night on zoom! Bring your brain, and a sense of humor. Nerds and non-nerds welcome!',
    event_date: "October 19, 2021",
    start_time: "17:00",
    end_time: "20:00",
    event_category: "trivia night",
    user_id: 2
  },
  {
    location: 'My House (email me for address!)',
    in_person: true,
    event_name: 'Super Smash Bros',
    event_description: 'We are playing Super Smash Brothers Melee on the N64. There will be four players per round, and as many rounds as it takes to crown a super smash champion! Come and join the fun, and BYOB!',
    event_date: "September 20, 2021",
    start_time: "20:00",
    end_time: "23:00",
    event_category: "video games",
    user_id: 3
  },
]

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent; 

