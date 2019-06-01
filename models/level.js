'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    id: DataTypes.INTEGER
  }, {});
  Level.associate = function(models) {
    // associations can be defined here
  };
  return Level;
};