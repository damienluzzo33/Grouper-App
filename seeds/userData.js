const { User } = require('../models');

const userData = [
	{
		email: 'hehexd@gmail.com',
		password: 'password1',
		username: 'user1'
	},
	{
		email: 'fakemail@gmail.com',
		password: 'password2',
		username: 'user2'
	},
	{
		email: 'fakemail2@gmail.com',
		password: 'password3',
		username: 'user3'
	},
	{
		email: 'fakemail3@gmail.com',
		password: 'password4',
		username: 'user4'
	},
	{
		email: 'fakemail4@gmail.com',
		password: 'password5',
		username: 'user5'
	},
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
