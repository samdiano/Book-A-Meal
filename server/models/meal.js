export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    userId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsToMany(models.Menu, {
      through: 'MenuMeal',
      as: 'Menu',
      foreignKey: 'mealId',
    });
  };
  return Meal;
};
