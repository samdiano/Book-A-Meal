export default (sequelize, DataTypes) => {
  const MenuMeal = sequelize.define('MenuMeal', {
    mealId: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER
  }, {});
  MenuMeal.associate = (models) => {
    // associations can be defined here
    /* MenuMeal.hasMany(models.Meal);
    MenuMeal.hasMany(models.Menu);
    MenuMeal.hasMany(models.Meals, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    });
    MenuMeal.hasMany(models.Menu, {
      foreignKey: 'menuId',
      onDelete: 'CASCADE'
    });e M */
  };
  return MenuMeal;
};
