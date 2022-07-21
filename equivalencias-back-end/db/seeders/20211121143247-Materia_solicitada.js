module.exports = {
  up: async (queryInterface, Sequelize) => {
    const materia1 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada1 = materia1[0].id;

    const materia2 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '10' `,
      `SELECT id FROM "Equivalencia" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada2 = materia2[0].id;

    const materia3 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '14' `,
      `SELECT id FROM "Equivalencia" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada3 = materia3[0].id;

    const materia4 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '15' `,
      `SELECT id FROM "Equivalencia" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada4 = materia4[0].id;

    const materia5 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '12' `,
      `SELECT id FROM "Equivalencia" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada5 = materia5[0].id;

    await queryInterface.bulkInsert('Materia_solicitada', [
      {
        nombre: 'Introducción a la Programación',
        carrera: 'Tecnicatura en informatica',
        EquivalenciumId: matsolicitada1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: 'Gramatica 1',
        carrera: 'Profesorado de Ingles',
        EquivalenciumId: matsolicitada2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: 'Biologia General',
        carrera: 'Lic. en Biotecnologia',
        EquivalenciumId: matsolicitada3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: 'Pedagogía I',
        carrera: 'Lic. en Educacion',
        EquivalenciumId: matsolicitada4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: 'Metalurgia l',
        carrera: 'Tec. en Metalurgica',
        EquivalenciumId: matsolicitada5,
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
