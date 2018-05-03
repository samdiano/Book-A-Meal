export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.hasOne(models.User);
    Order.hasOne(models.Meal);
  };
  return Order;
};
