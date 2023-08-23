var DataTypes = require("sequelize").DataTypes;
var _estudiante = require("./estudiante");
var _estudiante_tarea = require("./estudiante_tarea");
var _tarea = require("./tarea");

function initModels(sequelize) {
  var estudiante = _estudiante(sequelize, DataTypes);
  var estudiante_tarea = _estudiante_tarea(sequelize, DataTypes);
  var tarea = _tarea(sequelize, DataTypes);

  estudiante_tarea.belongsTo(estudiante, { as: "estudiante_idEstudiante_estudiante", foreignKey: "estudiante_idEstudiante"});
  estudiante.hasMany(estudiante_tarea, { as: "estudiante_tareas", foreignKey: "estudiante_idEstudiante"});
  estudiante_tarea.belongsTo(tarea, { as: "tarea_idTarea_tarea", foreignKey: "tarea_idTarea"});
  tarea.hasMany(estudiante_tarea, { as: "estudiante_tareas", foreignKey: "tarea_idTarea"});

  return {
    estudiante,
    estudiante_tarea,
    tarea,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
