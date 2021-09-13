const { Pokemon, Type } = require('../../db.js')

//Creo la funcion
const getDBPokemon = async (req, res) => {
	//Array para guardar los pokes
	let pokeArray = [];

	try {
		//Busco todos pokes de la DB
		const resultsPokesDB = await Pokemon.findAll({
			include: {
				model: Type
			}
		})

		//Creo un objeto por cada poke con los stats 
		for(var i = 0; i < resultsPokesDB.length; i++){
			let pokeObj = {
				name: resultsPokesDB[i].name,
				height: resultsPokesDB[i].height,
				id: resultsPokesDB[i].id,
				sprite: resultsPokesDB[i].sprite,
				hp: resultsPokesDB[i].hp,
				attack : resultsPokesDB[i].attack,
				defense: resultsPokesDB[i].defense,
				special_attack: resultsPokesDB[i].special_attack,
				special_defense: resultsPokesDB[i].special_defense,
				speed: resultsPokesDB[i].speed,
				weight: resultsPokesDB[i].weight,
			}

			//Hago un array con el o los tipos
			if(resultsPokesDB[i].types.length === 1) pokeObj.types = [resultsPokesDB[i].types[0].name];

			else pokeObj.types = [resultsPokesDB[i].types[0].name, resultsPokesDB[i].types[1].name];

			//Pusheo los Objs
			pokeArray.push(pokeObj);
		}

		//Muestro los pokes
		res.send(pokeArray);
	}

	catch(error) {
		res.status(501).send(error);
	}
}

module.exports = getDBPokemon;