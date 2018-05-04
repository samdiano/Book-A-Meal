export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    /* User.hasMany(models.Meals, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });er. */
  };
  return User;
};
