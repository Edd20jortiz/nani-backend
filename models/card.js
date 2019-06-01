'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    meaning: DataTypes.TEXT,
    phrase: DataTypes.TEXT,
    description: DataTypes.TEXT,
    file_audio: DataTypes.STRING,
    file_image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};