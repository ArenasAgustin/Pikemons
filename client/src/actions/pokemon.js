import axios from 'axios';

export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const GET_POKEMON_SEARCH = 'GET_POKEMON_SEARCH';
export const REMOVE_DETAIL = 'REMOVE_DETAIL';
export const REMOVE_SEARCH = 'REMOVE_SEARCH';

export const addPokemon = (poke) => {
	return async (dispatch) => {
		const resultPokemon = await axios.post('http://localhost:3001/pokemons', poke);

		dispatch({ type: 'ADD_POKEMON', payload: resultPokemon.data})
	}
}

export const getPokemons = () => {
	return async (dispatch) => {
		const pokemonsArray = await axios('http://localhost:3001/pokemons');

		dispatch({ type: 'GET_POKEMONS', payload: pokemonsArray.data})
	}
}

export const getPokemonDetail = (id) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/${id}`);

		dispatch({ type: 'GET_POKEMON_DETAIL', payload: pokemon.data})
	}
}

export const getPokemonSearch = (name) => {
	return async (dispatch) => {
		const pokemon = await axios(`http://localhost:3001/pokemons/${name}`);

		dispatch({ type: 'GET_POKEMON_SEARCH', payload: pokemon.data})
	}
}

export const removeDetail = () => {
	return async (dispatch) => {
		dispatch({ type: 'REMOVE_DETAIL', payload: []})
	}
}

export const removeSeach = () => {
	return async (dispatch) => {
		dispatch({ type: 'REMOVE_SEARCH', payload: []})
	}
}