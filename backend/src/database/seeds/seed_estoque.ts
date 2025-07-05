'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estoque', [
      {
        farmaciaId: 1,
        remedioId: 1,
        quantidade: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        farmaciaId: 1,
        remedioId: 2,
        quantidade: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        farmaciaId: 2,
        remedioId: 3,
        quantidade: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estoque', null, {});
  },
};
