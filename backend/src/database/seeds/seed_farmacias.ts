'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmacia', [
      {
        cep: '20010-000',
        cidade: 'Rio de Janeiro',
        bairro: 'Centro',
        logradouro: 'Rua da Saúde',
        numero: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cep: '01001-000',
        cidade: 'São Paulo',
        bairro: 'Sé',
        logradouro: 'Praça da Sé',
        numero: 123,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cep: '30140-110',
        cidade: 'Belo Horizonte',
        bairro: 'Savassi',
        logradouro: 'Rua Pernambuco',
        numero: 455,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cep: '70040-010',
        cidade: 'Brasília',
        bairro: 'Asa Sul',
        logradouro: 'SQS 104 Bloco B',
        numero: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmacia', null, {});
  }
};
