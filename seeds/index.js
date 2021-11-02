const sequelize = require('../config/connection');
const eventData = require('./eventData');
const userData = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await eventData();

  await userData();

  process.exit(0);
};

seedAll();