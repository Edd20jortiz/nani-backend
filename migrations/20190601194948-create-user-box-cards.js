'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_box_cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUserBox: {
        type: Sequelize.INTEGER,
        field: 'user_box_id'
      },
      idCard: {
        type: Sequelize.INTEGER,
        field: 'card_id'
      },
      reviewAt: {
        type: Sequelize.INTEGER,
        field: 'review_at'
      },
      nextReviewAt: {
        type: Sequelize.INTEGER,
        field: 'next_review_at'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserBoxCards');
  }
};