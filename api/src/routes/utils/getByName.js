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
				name: auxPokeDB.name,
				height: auxPokeDB.height,
				id: auxPokeDB.id,
				sprite: auxPokeDB.sprite,
				hp: auxPokeDB.hp,
				attack : auxPokeDB.attack,
				defense: auxPokeDB.defense,
				special_attack: auxPokeDB.special_attack,
				special_defense: auxPokeDB.special_defense,
				speed: auxPokeDB.speed,
				weight: auxPokeDB.weight,
			}

			if(auxPokeDB.types.length === 1) pokeDB.types = [auxPokeDB.types[0].name];

			else pokeDB.types = [auxPokeDB.types[0].name, auxPokeDB.types[1].name];

			return res.send(pokeDB);
		}

		else if(!auxPokeDB){
			//Busco en la Api
			const auxPokeApi = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);

			//Creo objeto
			let pokeApi = {
				name,
				height: auxPokeApi.data.height,
				id: auxPokeApi.data.id,
				sprite: auxPokeApi.data.sprites.other['official-artwork'].front_default,
				hp: auxPokeApi.data.stats[0].base_stat,
				attack : auxPokeApi.data.stats[1].base_stat,
				defense: auxPokeApi.data.stats[2].base_stat,
				special_attack: auxPokeApi.data.stats[3].base_stat,
				special_defense: auxPokeApi.data.stats[4].base_stat,
				speed: auxPokeApi.data.stats[2].base_stat,
				weight: auxPokeApi.data.weight,
			}

			if(auxPokeApi.data.types.length === 1) pokeApi.types = [auxPokeApi.data.types[0].type.name];

			else pokeApi.types = [auxPokeApi.data.types[0].type.name, auxPokeApi.data.types[1].type.name];

			return res.send(pokeApi);
		}

		else return res.send(null);
	}
	
	catch(error) {
		res.status(501).send(error);
	}
}

module.exports = getByName;