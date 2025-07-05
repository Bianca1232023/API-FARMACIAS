'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('solicitacao', [
      {
        usuarioId: 1,
        farmaciaId: 1,
        remedioId: 1,
        justificativa: 'Paciente com dor persistente e estoque indisponível em casa.',
        status: 'pendente',
        receitaId: 1,
        dataCriacao: new Date('2025-07-01'),
      },
      {
        usuarioId: 2,
        farmaciaId: 2,
        remedioId: 2,
        justificativa: 'Tratamento urgente prescrito por médico.',
        status: 'aprovada',
        receitaId: 2,
        dataCriacao: new Date('2025-07-03'),
      },
      {
        usuarioId: 3,
        farmaciaId: 1,
        remedioId: 3,
        justificativa: 'Solicitação preventiva para tratamento contínuo.',
        status: 'rejeitada',
        receitaId: 3,
        dataCriacao: new Date('2025-07-04'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('solicitacao', null, {});
  }
};
