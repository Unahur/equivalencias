'use strict';

// me inspiré en
// https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // en que tabla
      'Equivalencia',
      // nombre de la columna
      'UsuarioId',
      // detalles de la columna nueva
      {
        // tipo
        type: Sequelize.INTEGER,
        // a que otra tabla referencia (porque es una FK)
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        // que pasa cuando se modifica o borra el id de producto, con la FK
        onUpdate: 'CASCADE',
        onDelete: '',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      // en que tabla
      'Equivalencia',
      // nombre de la columna
      'UsuarioId'
    );
  },
};
