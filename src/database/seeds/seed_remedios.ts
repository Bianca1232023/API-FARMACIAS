'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('remedios', [
      {
        nome: 'Paracetamol',
        principio_ativo: 'Paracetamol',
        categoria: 'Analgésico',
        dosagem: '500mg',
        fabricante: 'Medley',
      },
      {
        nome: 'Amoxicilina',
        principio_ativo: 'Amoxicilina Tri-Hidratada',
        categoria: 'Antibiótico',
        dosagem: '500mg',
        fabricante: 'EMS',
      },
      {
        nome: 'Ibuprofeno',
        principio_ativo: 'Ibuprofeno',
        categoria: 'Anti-inflamatório',
        dosagem: '400mg',
        fabricante: 'Neo Química',
      },
      {
        nome: 'Losartana',
        principio_ativo: 'Losartana Potássica',
        categoria: 'Anti-hipertensivo',
        dosagem: '50mg',
        fabricante: 'Bayer',
      },
      {
        nome: 'Omeprazol',
        principio_ativo: 'Omeprazol',
        categoria: 'Inibidor de bomba de prótons',
        dosagem: '20mg',
        fabricante: 'Eurofarma',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('remedios', null, {});
  }
};
