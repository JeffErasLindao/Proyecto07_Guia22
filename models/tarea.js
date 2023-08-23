const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarea', {
    idTarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    f_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    f_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    prioridad: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTarea" },
        ]
      },
    ]
  });
};
