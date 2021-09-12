const axios = require('axios');

const getApiPokemon = async () => {
	let pokeArray = [];

	try {
		const pokeJson = await axios('https://pokeapi.co/api/v2/pokemon?offset=00&limit=40');
		
		const resultsPokesApis = pokeJson.data.results;

		for(var i = 0; i < resultsPokesApis.length; i++){
			const objAux = await axios(resultsPokesApis[i].url);
			
			let pokeObj = {
				name: resultsPokes[i].name,
				height: objAux.data.height,
				id: objAux.data.id,
				sprite: objAux.data.sprites.other.dream_world.front_default,
				hp: objAux.data.stats[0].base_stat,
				attack : objAux.data.stats[1].base_stat,
				defense: objAux.data.stats[2].base_stat,
				special_attack: objAux.data.stats[3].base_stat,
				special_defense: objAux.data.stats[4].base_stat,
				speed: objAux.data.stats[2].base_stat,
				weight: objAux.data.weight,
			}

			if(objAux.data.types.length === 1) pokeObj.type = [objAux.data.types[0].type.name];

			else pokeObj.type = [objAux.data.types[0].type.name, objAux.data.types[1].type.name];

			pokeArray.push(pokeObj);
		}

		console.log(pokeArray)
	}
	catch(e) {
		console.log(e);
	}
}

module.exports = getApiPokemon;