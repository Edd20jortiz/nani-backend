'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
  };
  return Deck;
};