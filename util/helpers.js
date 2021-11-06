const moment = require('moment');

module.exports = {
	format_date: async (date) => {
		return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
	},
	format_time: async (time) => {
		return moment(time, 'HH:mm:ss').format('h:mm A');
	},
	format_category: async (category) => {
		let catArr = category.split(' ');
		let reformated = catArr.join('');
		return reformated;
	}
};
