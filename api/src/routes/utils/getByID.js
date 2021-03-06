const axios = require('axios');
const { Pokemon, Type } = require('../../db.js');

const getByID = async (req, res) => {
	const { idPokemon: id } = req.params;
	const { origin } = req.query;

	try {
		if(origin === 'db'){
			//Busco en DB
			const auxPokeDB = await Pokemon.findByPk(
				id ,
				{ include: Type }
			);

			//Creo objeto
			if(auxPokeDB){
				let pokeDB = {
					name: auxPokeDB.name,
					height: auxPokeDB.height,
					id: id,
					sprite: auxPokeDB.sprite,
					hp: auxPokeDB.hp,
					attack : auxPokeDB.attack,
					defense: auxPokeDB.defense,
					special_attack: auxPokeDB.special_attack,
					special_defense: auxPokeDB.special_defense,
					speed: auxPokeDB.speed,
					weight: auxPokeDB.weight,
					origin: "db"
				}
				console.log(pokeDB)

				if(auxPokeDB.types.length === 1) pokeDB.types = [auxPokeDB.types[0].name];

				else pokeDB.types = [auxPokeDB.types[0].name, auxPokeDB.types[1].name];
				console.log(pokeDB)

				return res.status(200).send(pokeDB);
			}
		}

		else if(origin === 'api' || !origin){
			//Busco en la Api
			const auxPokeApi = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

			//Creo objeto
			let pokeApi = {
				name: auxPokeApi.data.name,
				height: auxPokeApi.data.height,
				id: id,
				sprite: auxPokeApi.data.sprites.other['official-artwork'].front_default,
				hp: auxPokeApi.data.stats[0].base_stat,
				attack : auxPokeApi.data.stats[1].base_stat,
				defense: auxPokeApi.data.stats[2].base_stat,
				special_attack: auxPokeApi.data.stats[3].base_stat,
				special_defense: auxPokeApi.data.stats[4].base_stat,
				speed: auxPokeApi.data.stats[2].base_stat,
				weight: auxPokeApi.data.weight,
				origin: "api"
			}

			if(auxPokeApi.data.types.length === 1) pokeApi.types = [auxPokeApi.data.types[0].type.name];

			else pokeApi.types = [auxPokeApi.data.types[0].type.name, auxPokeApi.data.types[1].type.name];

			return res.send(pokeApi);
		}

		else return res.status(404).send(new Error('Pokemon not found'));
	}
	
	catch(error) {
		console.log(error)
		res.status(404).send(error);
	}
}

module.exports = getByID;