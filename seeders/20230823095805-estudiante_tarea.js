'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
     await queryInterface.bulkInsert('estudiante_tarea', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        estudiante_idEstudiante: 5,
        tarea_idTarea: 5,
      },
      {
        estudiante_idEstudiante: 6,
        tarea_idTarea: 6,
      },
      {
        estudiante_idEstudiante: 7,
        tarea_idTarea: 7,
      },
      ], {});

  },

  async down (queryInterface, Sequelize) {
 /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
 await queryInterface.bulkDelete('estudiante_tarea', null, {});
  }
};
