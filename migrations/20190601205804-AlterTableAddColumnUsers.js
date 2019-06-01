'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn(
      'Users',
      'password', {
         'type' : Sequelize.STRING,
          'after': 'phone'
      }
     
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'password'
    );
  }
};
