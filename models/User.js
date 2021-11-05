// require bcrypt for password with node package  =============================================================================
var bcrypt = require("bcrypt");
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// model  =========================================================

class User extends Model {
    validatePassword(loginPassword) {
        return bcrypt.compare(loginPassword, this.password);
    };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING, 
            defaultvalue: "someone",
            allowNull: false, 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                len: [5],
            },
        }, 
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
		// timestamps: true,
		// updatedAt: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
    }
);

module.exports = User;
