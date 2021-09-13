const getApiPokemon = require('./getApiPokemon');
const getDBPokemon = require('./getDBPokemon');
const createPokemon = require('./createPokemon');
const getAllPokemon = require('./getAllPokemon');
const getByName = require('./getByName');
const getByID = require('./getByID');

module.exports = {
	getApiPokemon,
	getDBPokemon,
	createPokemon,
	getAllPokemon,
	getByName,
	getByID
}