const axios = require('axios');

export const GET_TYPES = 'GET_TYPES';

export const getTypes = () => {
	return async (dispatch) => {
		const typesArray = await axios('http://localhost:3001/pokemons');

		dispatch({ type: 'GET_TYPES', payload: typesArray})
	}
}