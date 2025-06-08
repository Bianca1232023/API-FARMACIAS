'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('solicitacao', {
      solicitacaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      remedioId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'remedios',
          key: 'remedioId',
        },
      },
      farmaciaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'farmacias',
          key: 'farmaciaId',
        },
      },
      justificativa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pendente',
      },
      receitaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'receitas',
          key: 'receitaId',
        },
      },
      dataCriacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('solicitacao');
  },
};
