const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    
    //Nombre del Pokemon
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Id del Pokemon
    idPokemon: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    //Puntos de vida del Pokemon
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Ataque del Pokemon
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Defensa del Pokemon
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Ataque especial del Pokemon
    special_attack: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Defensa del Pokemon
    special_defense: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Velocidad del Pokemon
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Altura del Pokemon
    height: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Peso del Pokemon
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: '80'
    },

    //Imagen del Pokemon
    sprite: {
      type: DataTypes.STRING
    }
  });
};
