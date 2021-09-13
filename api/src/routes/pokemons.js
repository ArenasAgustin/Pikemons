const router = require('express').Router();
const { Pokemon, Type } = require('../db.js');
const { 
	getApiPokemon, getDBPokemon, createPokemon, getAllPokemon, getByName, getByID
} = require('./utils/indexUtils');

//Creo el Poke
router.post('/', createPokemon);

//Busco todos los pokes creados
router.get('/news', getDBPokemon);

//Busco todos los pokes de la api
router.get('/api', getApiPokemon);

//Busco 40 pokes de la api y los pokes credos
router.get('/', getAllPokemon);

//Busqueda por nombre exacto
router.get('/find', getByName);

//Busqueda por ID
router.get('/:idPokemon', getByID);

module.exports = router;