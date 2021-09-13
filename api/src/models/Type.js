const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    
    //Nombre del Tipo
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    //Id del Tipo
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });
};