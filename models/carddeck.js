'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardDeck = sequelize.define('CardDeck', {
    id: DataTypes.INTEGER
  }, {});
  CardDeck.associate = function(models) {
    // associations can be defined here
  };
  return CardDeck;
};