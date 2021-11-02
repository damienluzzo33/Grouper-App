const { eventData } = require('..models');

const eventData = [
  {
    location: 'Austin', 
    event_date: "October 10, 2021",
    start_time: "14:00",
    end_time: "18:00",
    eventCategory: "poker night"
  },
  {
    location: 'Austin', 
    event_date: "October 25, 2021",
    start_time: "16:00",
    end_time: "18:00",
    eventCategory: "study group"
  },
  {
    location: 'Austin', 
    event_date: "October 29, 2021",
    start_time: "17:00",
    end_time: "19:00",
    eventCategory: "board games"
  },
  {
    location: 'Austin', 
    event_date: "September 20, 2021",
    start_time: "12:00",
    end_time: "16:00",
    eventCategory: "smashbros"
  },
] 

const eventData = () => eventData.bulkCreate(eventData);

module.export = seedeventData; 

