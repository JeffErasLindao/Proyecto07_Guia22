'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('tarea', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idTarea: 5,
        descripcion: "Asasasas",
        estado: "por hacer",
      },
      {
        idTarea: 6,
        descripcion: "LLL",
        estado: "por hacer",
      },
      {
        idTarea: 7,
        descripcion: "QQQQ",
        estado: "por hacer",

      },
      ], {});


  },

  async down (queryInterface, Sequelize) {
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('tarea', null, {});


  }
};
