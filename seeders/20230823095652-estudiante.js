'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
     await queryInterface.bulkInsert('estudiante', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idEstudiante:5,
        nombre: "Juan",
      },
      {
        idEstudiante:6,
        nombre: "Maria",
      },
      {
        idEstudiante:7,
        nombre: "Paola",

      },
      ], {});



  },

  async down (queryInterface, Sequelize) {
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('estudiante', null, {});
  }
};
