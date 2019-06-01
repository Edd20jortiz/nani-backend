'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'Boxes',
          'name', {
            'type' : Sequelize.STRING,
              'after': 'id',
              'allowNull': false,
          }
        ), 
      queryInterface.addColumn(
          'Boxes',
          'description', {
            'type' : Sequelize.STRING,
              'after': 'name',
          }
        )
    ]); 
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn(
        'Boxes',
        'name'
      ),
      queryInterface.removeColumn(
        'Boxes',
        'description'
      )
    ]);
  }
};
