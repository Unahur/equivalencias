'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        dni: 30563652,
        nombre: 'Enzo',
        apellido: 'Fernandez',
        email: 'enzo@gmail.com',
        discord: '@enzoF',
        telefono: 44595568,
        rol: 'alumno',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        dni: 20569859,
        nombre: 'Anthony ',
        apellido: 'kiedis',
        email: 'RHCP@gmail.com',
        discord: '@Anthony55',
        telefono: 1523698547,
        rol: 'directivo',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        dni: 35025698,
        nombre: 'Liam',
        apellido: 'Gallagher',
        email: 'Liam595@hotmail.com',
        discord: 'Liam99',
        telefono: 1123968547,
        rol: 'alumno',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: 35563675,
        nombre: 'Paula',
        apellido: 'Rey',
        email: 'pauli@gmail.com',
        discord: '@Paula595',
        telefono: 1190595568,
        rol: 'alumno',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: 35563652,
        nombre: 'Paula',
        apellido: 'Rey',
        email: 'pauli@gmail.com',
        discord: '@Paula595',
        telefono: 1190595568,
        rol: 'alumno',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        dni: 25569598,
        nombre: 'Ana',
        apellido: 'Gonzalez',
        email: 'AnaGon@yahoo.com.ar',
        discord: '@estrella59',
        telefono: 1123708547,
        rol: 'directivo',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        dni: 29025755,
        nombre: 'Peter',
        apellido: 'Parker',
        email: 'Spider@hotmail.com',
        discord: '@laAraña',
        telefono: 1123968889,
        rol: 'alumno',
        password: '1525gty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
