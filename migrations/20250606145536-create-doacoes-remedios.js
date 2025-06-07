'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doacoes_remedios', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      remedioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'remedios', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_doacao: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
      data_fim_tratamento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doacoes_remedios');
  },
};
