'use strict';
module.exports = (sequelize, DataTypes) => {
  const Box = sequelize.define('Box', {
    id: DataTypes.INTEGER,
    
  }, {});
  Box.associate = function(models) {
    // associations can be defined here
  };
  return Box;
};