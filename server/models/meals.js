'use strict';
module.exports = (sequelize, DataTypes) => {
  var meals = sequelize.define('meals', {
    title: DataTypes.STRING
  }, {});
  meals.associate = function(models) {
    // associations can be defined here
  };
  return meals;
};