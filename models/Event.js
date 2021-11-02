const sequelize = require('../config/connection');
const { DataTypes, Model } = require('sequelize');

class Event extends Model {}

Event.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		event_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		event_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		start_time: {
			type: DataTypes.TIME,
			defaultValue: '00:00:00',
			field: 'hour',
			allowNull: false
		},
		end_time: {
			type: DataTypes.TIME,
			defaultValue: '00:00:00',
			field: 'hour',
			allowNull: false
		},
		eventCategory: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		updatedAt: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'thread'
	}
);

module.exports = Event;
