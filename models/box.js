'use strict';
module.exports = (sequelize, DataTypes) => {
  const Box = sequelize.define('Box', {
    id: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    createdAt: DataTypes.DATETIME,
    updateAt: DataTypes.DATETIME,
  }, {});
  Box.associate = function(models) {
    // associations can be defined here
  };
  return Box;
};