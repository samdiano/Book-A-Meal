export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.belongsToMany(models.Meal);
    User.belongsToMany(models.Menu);
    User.belongsToMany(models.Order);
  };
  return User;
};
