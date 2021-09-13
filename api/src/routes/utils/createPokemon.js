const { Pokemon, Type } = require('../../db.js');

const createPokemon = async (req, res) => {
	const { 
		name, nameTypes, hp, attack, defense, special_attack, special_defense, speed, height, weight, sprite 
	} = req.body;

	try {
		//Busco el type
		const typesArr = await Promise.all(nameTypes.map(name => Type.findOne({where: { name } })))

		//Creo el poke
		const poke = await Pokemon.create({
			name, hp, attack, defense, special_attack, special_defense, speed, height, weight, sprite
		})

		await poke.setTypes(typesArr);

		res.send(poke);
	}

	catch(error) {
		res.status(501).send(error);
	}
}

module.exports = createPokemon;