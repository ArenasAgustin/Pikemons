const getApiPokemon = require('./getApiPokemon');
const getDBPokemon = require('./getDBPokemon');

const getAllPokemon = async (req, res) => {
	try {
		let resultsPokesApi = await getApiPokemon(req, res);
		let resultsPokesDB = await getDBPokemon(req, res);

		console.log(resultsPokesApi);
		console.log(resultsPokesDB);

		let allPokemons = await resultsPokesDB.concat(resultsPokesApi);
		console.log(allPokemons);

		res.send(allPokemons);
	}

	catch(error) {
		console.log(error)
		res.status(501).send(error);
	}
}

module.exports = getAllPokemon;