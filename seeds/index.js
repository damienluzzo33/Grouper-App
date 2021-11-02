const sequelize = require('../config/connection');
const seedEvent = require('./eventData');
const userSeeds = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();

  await seedEvent();

  process.exit(0);
};

seedAll();