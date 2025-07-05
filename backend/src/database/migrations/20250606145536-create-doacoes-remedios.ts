'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doacao_remedio', {
      doacaoRemedioId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      solicitacaoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'solicitacoes',
          key: 'solicitacaoId',
        },
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id', // ajuste caso o nome real da PK em `usuarios` seja diferente
        },
      },
      remedioId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'remedios',
          key: 'remedioId',
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_doacao: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
      },
      data_fim_tratamento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doacao_remedio');
  },
};
