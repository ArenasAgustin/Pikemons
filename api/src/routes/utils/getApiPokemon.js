const axios = require('axios');

//Creo la funcion
const getApiPokemon = async () => {
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
				id: objAux.data.id,
				sprite: objAux.data.sprites.other['official-artwork'].front_default,
				origin: "api"
			}

			//Hago un array con el o los tipos
			if(objAux.data.types.length === 1) pokeObj.types = [objAux.data.types[0].type.name];

			else pokeObj.types = [objAux.data.types[0].type.name, objAux.data.types[1].type.name];

			//Pusheo los Objs
			pokeArray.push(pokeObj);
		}

		//Muestro los pokes
		return pokeArray;
	}

	catch(error) {
		return error;
	}
}

module.exports = getApiPokemon;