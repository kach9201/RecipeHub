// Import Sequelize and define a connection to the database
const Sequelize= require('sequelize');
const sequelize = require('../config/connection');

// Define the User model
const User = sequelize.define('User', {
    // ...
});

// Define the Recipe model
const Recipe = sequelize.define('Recipe', {
    // ...
});

// Define the association between User and Recipe
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recipe };
