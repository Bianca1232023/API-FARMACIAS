'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
      {
        nome: 'Ana Souza',
        dataNascimento: new Date('1995-04-12'),
        cpf: '123.456.789-00',
        email: 'ana.souza@example.com',
        funcionario: true,
        farmaciaId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Carlos Lima',
        dataNascimento: new Date('1988-11-30'),
        cpf: '987.654.321-00',
        email: 'carlos.lima@example.com',
        funcionario: false,
        farmaciaId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Mariana Ferreira',
        dataNascimento: new Date('2000-06-05'),
        cpf: null, 
        email: 'mariana.ferreira@example.com',
        funcionario: true,
        farmaciaId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  },
};
