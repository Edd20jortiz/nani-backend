'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserReview = sequelize.define('UserReview', {
    id: DataTypes.INTEGER
  }, {});
  UserReview.associate = function(models) {
    // associations can be defined here
  };
  return UserReview;
};