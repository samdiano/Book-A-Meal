export default (sequelize, DataTypes) => {
  const MenuMeal = sequelize.define('MenuMeal', {
    mealId: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER,
  }, {});
  MenuMeal.associate = (models) => {
    // associations can be defined here
    MenuMeal.hasMany(models.Meal);
    MenuMeal.hasMany(models.Menu);
  };
  return MenuMeal;
};
