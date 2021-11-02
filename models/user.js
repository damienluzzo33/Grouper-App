// require bcrypt for password with node package  =============================================================================
var bcrypt = require("bcrypt-nodejs");
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// model  ==========================================================================================================================================================

// module.exports = function(sequalize, DataTypes) {
//     var User = sequalize.define("User", {

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
        // email 
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
            async beforePasswordCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
		timestamps: true,
		updatedAt: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'thread'
    }
);

module.exports = User;

// CHECK PASSWORD with database password. =============================================================================
// User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// MAKE SURE THAT THE 
// User.addHook("beforeCreate", function (user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null
// );
// });

// // come back a little bit confused on which ones to associate =============================================================================
// User.associate = function(models) {
//     models.User.hasMany(models.Events, {
//         onDelete: "CASCADE"
//     }),
//     model.User.hasMany(model.Location, {
//         onDelete: "CASCADE"
//     }) 
//     models.User.hasMany(models.Events, {
//         onDelete: "CASCADE"
    
//     });
// };

// return User; 
