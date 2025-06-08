'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('remedios', {
      remedioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      principio_ativo: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      categoria: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      dosagem: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      fabricante: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('remedios');
  },
};
