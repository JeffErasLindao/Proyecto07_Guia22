const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiante', {
    idEstudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    curso: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carrera: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estudiante',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstudiante" },
        ]
      },
    ]
  });
};
