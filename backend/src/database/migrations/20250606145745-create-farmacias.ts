'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Farmacia', {
      farmaciaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Farmacia');
  },
};
