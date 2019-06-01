'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBoxCards = sequelize.define('UserBoxCards', {
    id: DataTypes.INTEGER
  }, {});
  UserBoxCards.associate = function(models) {
    // associations can be defined here
  };
  return UserBoxCards;
};