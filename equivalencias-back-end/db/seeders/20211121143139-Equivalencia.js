'use strict';

// me inspiré en
// https://stackoverflow.com/questions/45286429/custom-query-on-sequelize-seeder
// cambiando la notación de Promise a async/await

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product1Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuario" WHERE dni = '30563652' `,
      `SELECT id FROM "Usuarios" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario1 = product1Data[0].id;

    const product2Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '35025698' `,
      `SELECT id FROM "Usuarios" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario2 = product2Data[0].id;

    const product3Data = await queryInterface.sequelize.query(
      // `SELECT id FROM "Usuarios" WHERE dni = '35563675' `,
      `SELECT id FROM "Usuarios" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario3 = product3Data[0].id;

    const product4Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '35563652' `,
      `SELECT id FROM "Usuarios" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario4 = product4Data[0].id;

    const product5Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '29025755' `,
      `SELECT id FROM "Usuarios" WHERE id = '6' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario5 = product5Data[0].id;

    await queryInterface.bulkInsert('Equivalencia', [
      {
        instituto: 'ninguno',
        UsuarioId: usuario1,
        estado: 'aceptado',
        observaciones: 'falta analitico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instituto: 'ninguno',
        UsuarioId: usuario2,
        estado: 'aceptado',
        observaciones: 'falta dni',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        instituto: 'ninguno',
        UsuarioId: usuario3,
        estado: 'rechazado',
        observaciones: 'falta analitico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        instituto: 'ninguno',
        UsuarioId: usuario4,
        estado: 'pendiente',
        observaciones: 'falta analitico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instituto: 'ninguno',
        UsuarioId: usuario5,
        estado: 'aceptado',
        observaciones: 'no hay observaciones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
