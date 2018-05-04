export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
     /* Order.hasMany(models.Meals, {
      foreignKey: 'MealId',
      onDelete: 'CASCADE'
    });
    Order.hasOne(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });erd */
  };
  return Order;
};
