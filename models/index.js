const Event = require('./Event.js');
const User = require('./User.js');

User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Event };