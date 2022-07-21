// me inspiré en
// https://stackoverflow.com/questions/45286429/custom-query-on-sequelize-seeder
// cambiando la notación de Promise a async/await

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const materia1 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '10' `,
      `SELECT id FROM "Equivalencia" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi1 = materia1[0].id;

    const materia2 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi2 = materia2[0].id;

    const materia3 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '14' `,
      `SELECT id FROM "Equivalencia" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi3 = materia3[0].id;

    const materia4 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '15' `,
      `SELECT id FROM "Equivalencia" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi4 = materia4[0].id;

    const materia5 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi5 = materia5[0].id;

    ///////////////////////////////////////////////////

    const universidad1 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '20' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod1 = universidad1[0].id;

    const universidad2 = await queryInterface.sequelize.query(
      //    `SELECT id FROM "Universidad_origen" WHERE codigo = '21' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod2 = universidad2[0].id;

    const universidad3 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '22' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod3 = universidad3[0].id;

    const universidad4 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '23' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod4 = universidad4[0].id;

    const universidad5 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '24' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod5 = universidad5[0].id;

    await queryInterface.bulkInsert('Materia_aprobada', [
      {
        nota: 7,
        carga_horaria: 8,
        año_aprobacion: '10-03-2015',
        nombre_materia: 'Gramática I',
        certificado: true,
        EquivalenciumId: equi1,
        UniversidadOrigenId: cod1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nota: 9,
        carga_horaria: 8,
        año_aprobacion: '10-03-2015',
        nombre_materia: 'Programacion 1',
        certificado: true,
        EquivalenciumId: equi2,
        UniversidadOrigenId: cod2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nota: 7,
        carga_horaria: 6,
        año_aprobacion: '25-11-2020',
        nombre_materia: 'Quimica General',
        certificado: false,
        EquivalenciumId: equi3,
        UniversidadOrigenId: cod3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nota: 8,
        carga_horaria: 8,
        año_aprobacion: '20-11-2019',
        nombre_materia: 'Pedagogía I',
        certificado: false,
        EquivalenciumId: equi4,
        UniversidadOrigenId: cod4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nota: 9,
        carga_horaria: 8,
        año_aprobacion: '9-12-2018',
        nombre_materia: 'Programación con Objetos I',
        certificado: true,
        EquivalenciumId: equi5,
        UniversidadOrigenId: cod5,

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
