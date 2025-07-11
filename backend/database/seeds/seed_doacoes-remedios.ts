'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('doacao-remedio', [
      {
        usuarioId: 1,
        remedioId: 2,
        quantidade: 10,
        data_doacao: '2025-07-01',
        data_fim_tratamento: '2025-07-20',
      },
      {
        usuarioId: 2,
        remedioId: 1,
        quantidade: 5,
        data_doacao: '2025-07-03',
        data_fim_tratamento: '2025-07-25',
      },
      {
        usuarioId: 3,
        remedioId: 3,
        quantidade: 15,
        data_doacao: '2025-07-04',
        data_fim_tratamento: '2025-08-04',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('doacao-remedio', null, {});
  }
};