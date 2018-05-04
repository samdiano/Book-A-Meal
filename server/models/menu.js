export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    /* Menu.belongsTo(models.user, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });  */
  };
  return Menu;
};
