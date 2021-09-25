import { 
	ADD_POKEMON, GET_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_SEARCH, REMOVE_DETAIL
} from "../actions/pokemon.js";
import { GET_TYPES } from "../actions/types.js";

const initialState = {
    pokemonsArray: [],
    pokemonDetail: {},
    pokemonSearch: [],
    typesArray: [],
    newPokemon: {}
};

export const rootReducer = (state = initialState, {type, payload}) => {
	switch(type){
		case ADD_POKEMON:
			return {
				...state,
				newPokemon: payload
			};
		case GET_POKEMONS:
			return{
				...state,
				pokemonsArray: payload
			};
		case GET_POKEMON_DETAIL:
			return{
				...state,
				pokemonDetail: payload
			};
		case GET_POKEMON_SEARCH:
			return{
				...state,
				pokemonSearch: [payload, ...state.pokemonSearch]
			};
		case GET_TYPES:
			return {
				...state,
				typesArray: payload
			};
		case REMOVE_DETAIL:
			return{
				...state,
				pokemonDetail: payload
			};
		default:
			return state;
	}
}