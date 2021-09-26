const axios = require('axios');
const { Pokemon, Type } = require('../../db.js');

//Creo la funcion
const getByName = async (req, res) => {
	const { name } = req.query;

	try {
		//Primero busco en DB
		const auxPokeDB = await Pokemon.findOne({
			where: { name },
			include: { model: Type }
		});

		//Creo objeto
		if(auxPokeDB){
			let pokeDB = {
				name,
				id: auxPokeDB.id,
				sprite: auxPokeDB.sprite,
				origin: "db"
			}

			if(auxPokeDB.types.length === 1) pokeDB.types = [auxPokeDB.types[0].name];

			else pokeDB.types = [auxPokeDB.types[0].name, auxPokeDB.types[1].name];

			return res.status(200).send(pokeDB);
		}

		else if(!auxPokeDB){
			//Busco en la Api
			const auxPokeApi = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);

			//Creo objeto
			let pokeApi = {
				name,
				id: auxPokeApi.data.id,
				sprite: auxPokeApi.data.sprites.other['official-artwork'].front_default,
				origin: "api"
			}

			if(auxPokeApi.data.types.length === 1) pokeApi.types = [auxPokeApi.data.types[0].type.name];

			else pokeApi.types = [auxPokeApi.data.types[0].type.name, auxPokeApi.data.types[1].type.name];

			return res.status(200).send(pokeApi);
		}

		else return res.status(404).send(new Error('Pokemon not found'));
	}
	
	catch(error) {
		res.status(404).send(null);
	}
}

module.exports = getByName;