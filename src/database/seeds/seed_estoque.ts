'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estoque', [
      {
        farmaciaId: 1,
        remedioId: 1,
        quantidade_disponivel: 50,
      },
      {
        farmaciaId: 1,
        remedioId: 2,
        quantidade_disponivel: 30,
      },
      {
        farmaciaId: 2,
        remedioId: 1,
        quantidade_disponivel: 40,
      },
      {
        farmaciaId: 2,
        remedioId: 3,
        quantidade_disponivel: 10,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estoque', null, {});
  }
};
