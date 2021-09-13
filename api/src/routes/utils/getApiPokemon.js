const axios = require('axios');

//Creo la funcion
const getApiPokemon = async (req, res) => {
	//Array para guardar los pokes
	let pokeArray = [];

	try {
		//Busco todos los 40 pokes
		const pokeJson = await axios('https://pokeapi.co/api/v2/pokemon?offset=00&limit=40');
		const resultsPokesApi = pokeJson.data.results;

		//Creo un objeto por cada poke con los stats 
		for(var i = 0; i < resultsPokesApi.length; i++){
			const objAux = await axios(resultsPokesApi[i].url);
			
			let pokeObj = {
				name: resultsPokesApi[i].name,
				height: objAux.data.height,
				id: objAux.data.id,
				sprite: objAux.data.sprites.other['official-artwork'].front_default,
				hp: objAux.data.stats[0].base_stat,
				attack : objAux.data.stats[1].base_stat,
				defense: objAux.data.stats[2].base_stat,
				special_attack: objAux.data.stats[3].base_stat,
				special_defense: objAux.data.stats[4].base_stat,
				speed: objAux.data.stats[2].base_stat,
				weight: objAux.data.weight,
			}

			//Hago un array con el o los tipos
			if(objAux.data.types.length === 1) pokeObj.types = [objAux.data.types[0].type.name];

			else pokeObj.types = [objAux.data.types[0].type.name, objAux.data.types[1].type.name];

			//Pusheo los Objs
			pokeArray.push(pokeObj);
		}

		//Muestro los pokes
		res.send(pokeArray)
	}

	catch(error) {
		res.status(501).send(error);
	}
}

module.exports = getApiPokemon;