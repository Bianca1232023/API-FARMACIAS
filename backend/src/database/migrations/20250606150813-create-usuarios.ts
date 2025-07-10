'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      dataNascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true, // não foi especificado como obrigatório no model
      },
      email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
      },
      funcionario: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      farmaciaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'farmacias',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  },
};
