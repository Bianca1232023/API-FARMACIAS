'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Receita', [
      {
        descricao: 'Uso contínuo - tomar 1 comprimido por dia após o almoço.',
        solicitacaoId: 1,
        dataReceita: '2025-07-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Tomar 2 cápsulas de 12 em 12 horas por 10 dias.',
        solicitacaoId: 2,
        dataReceita: '2025-07-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Injeção única conforme prescrição médica.',
        solicitacaoId: 3,
        dataReceita: '2025-07-03',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Receita', null, {});
  }
};