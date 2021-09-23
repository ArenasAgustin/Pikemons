import axios from 'axios';

const all = 'all';
const allDefault = 'default';
const a_Z = 'a-Z'; 
const z_A = 'z-A';
const highest_Attack = 'highest_Attack';
const highest_Defense = 'highest_Defense';
const highest_Special_Attack = 'highest_Special_Attack';
const highest_Special_Defense = 'highest_Special_Defense';
const highest_Speed = 'highest_Speed';
const highest_Height = 'highest_Height';
const highest_Weight = 'highest_Weight';

export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const GET_POKEMON_SEARCH = 'GET_POKEMON_SEARCH';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_ORIGIN = 'FILTER_ORIGIN';

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

export const getPokemons = () => {
	return async (dispatch) => {
		const pokemonsArray = await axios('http://localhost:3001/pokemons/');

		return dispatch({ type: 'GET_POKEMONS', payload: pokemonsArray.data})
	}
}

export const getPokemonDetail = (id, origin) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/${id}?origin=${origin}`);

		return dispatch({ type: 'GET_POKEMON_DETAIL', payload: pokemon.data})
	}
}

export const getPokemonSearch = (name) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/find?name=${name}`);

		return dispatch({ type: 'GET_POKEMON_SEARCH', payload: pokemon.data})
	}
}

export const filterType = (pokemonsArray) => {
	return async (dispatch) => 
		dispatch({ type: 'FILTER_TYPE', payload: pokemonsArray})
}

export const filterOrigin = (pokemonsArray) => {
	return async (dispatch) => 
		dispatch({ type: 'FILTER_ORIGIN', payload: pokemonsArray})
}