'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
  };
  return Deck;
};