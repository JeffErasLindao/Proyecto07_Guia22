const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiante_tarea', {
    estudiante_idEstudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estudiante',
        key: 'idEstudiante'
      }
    },
    tarea_idTarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tarea',
        key: 'idTarea'
      }
    }
  }, {
    sequelize,
    tableName: 'estudiante_tarea',
    timestamps: false,
    indexes: [
      {
        name: "fk_estudiante_tarea_estudiante_idx",
        using: "BTREE",
        fields: [
          { name: "estudiante_idEstudiante" },
        ]
      },
      {
        name: "fk_estudiante_tarea_tarea1_idx",
        using: "BTREE",
        fields: [
          { name: "tarea_idTarea" },
        ]
      },
    ]
  });
};
