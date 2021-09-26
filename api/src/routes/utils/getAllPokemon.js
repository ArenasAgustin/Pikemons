const getApiPokemon = require('./getApiPokemon');
const getDBPokemon = require('./getDBPokemon');

const getAllPokemon = async (req, res) => {
	try {
		let resultsPokesApi = await getApiPokemon();
		let resultsPokesDB = await getDBPokemon();
		
		res.status(200).send([...resultsPokesApi, ...resultsPokesDB]); //allPokemons
	}

	catch(error) {
		res.status(501).send(error);
	}
}

module.exports = getAllPokemon;