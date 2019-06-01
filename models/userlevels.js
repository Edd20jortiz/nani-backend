'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLevels = sequelize.define('UserLevels', {
    id: DataTypes.INTEGER
  }, {});
  UserLevels.associate = function(models) {
    // associations can be defined here
  };
  return UserLevels;
};