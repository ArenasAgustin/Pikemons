const { Pokemons, Types } = require('../../db.js')

const getDBPokemon = async () => {
	let pokeArray = [];

	try {
		const resultPokesDB = await Pokemons.findAll({
			include: {
				model: Types
			}
		})

		console.log(resultPokesDB);
	}
}