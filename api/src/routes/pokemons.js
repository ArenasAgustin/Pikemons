const router = require('express').Router();
const { Pokemon, Type } = require('../db.js');
const { 
	getApiPokemon, getDBPokemon, createPokemon, getAllPokemon, getByName, getByID
} = require('./utils/indexUtils');

//Creo el Poke
router.post('/addpokemon', createPokemon);

//Busco todos los pokes creados
router.get('/news', async (req, res) => {
	try {
		res.send(await getDBPokemon());
	}
	catch (e) {
		res.status(501).send(error);
	}
});

//Busco todos los pokes de la api
router.get('/api', async (req, res) => {
	try {
		res.send(await getApiPokemon());
	}
	catch (e) {
		res.status(501).send(error);
	}
});

//Busco 40 pokes de la api y los pokes credos
router.get('/', getAllPokemon);

//Busqueda por nombre exacto
router.get('/find', getByName);

//Busqueda por ID
router.get('/:idPokemon', getByID);

module.exports = router;