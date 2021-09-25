import axios from 'axios';

export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const GET_POKEMON_SEARCH = 'GET_POKEMON_SEARCH';
export const REMOVE_DETAIL = 'REMOVE_DETAIL';

//agregar pokes
export const addPokemon = (poke) => {
	return async (dispatch) => {
		let types = [poke.type1, poke.type2];

		if (types[0] !== '???' && !types[0]) types.shift();
		if (types[1] !== '???' && !types[1]) types.pop();

		let objAux = {
			name: poke.name,
			height: poke.height ? poke.heigh : undefined,
			sprite: poke.sprite ? poke.sprite : undefined,
			hp: poke.hp ? poke.hp : undefined,
			attack : poke.attack ? poke.attack : undefined,
			defense: poke.defense ? poke.defense : undefined,
			special_attack: poke.special_attack ? poke.special_attack : undefined,
			special_defense: poke.special_defense ? poke.special_defense : undefined,
			speed: poke.speed ? poke.speed : undefined,
			weight: poke.weight ? poke.weight : undefined,
			types
		}

		const resultPokemon = await fetch('http://localhost:3001/pokemons/addpokemon', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(objAux)
		});

		dispatch({ type: 'ADD_POKEMON', payload: resultPokemon.json()})
	}
}

//Buscar todos los pokes
export const getPokemons = () => {
	return async (dispatch) => {
		const pokemonsArray = await axios('http://localhost:3001/pokemons/');

		return dispatch({ type: 'GET_POKEMONS', payload: pokemonsArray.data})
	}
}

//Buscar el detalle del poke
export const getPokemonDetail = (id, origin) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/${id}?origin=${origin}`);

		return dispatch({ type: 'GET_POKEMON_DETAIL', payload: pokemon.data})
	}
}

//Buscar el poke
export const getPokemonSearch = (name) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/find?name=${name}`);

		return dispatch({ type: 'GET_POKEMON_SEARCH', payload: pokemon.data})
	}
}

export const removeDetail = () => {
	return async (dispatch) => 
		dispatch({ type: 'REMOVE_DETAIL', payload: []})
}