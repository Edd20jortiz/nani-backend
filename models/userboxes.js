'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBoxes = sequelize.define('UserBoxes', {
    id: DataTypes.INTEGER
  }, {});
  UserBoxes.associate = function(models) {
    // associations can be defined here
  };
  return UserBoxes;
};