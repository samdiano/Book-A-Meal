export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATETIME,
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsToMany(models.Meal, {
      through: 'MenuMeal',
      as: 'Meal',
      foreignKey: 'menuId',
    });
  };
  return Menu;
};
