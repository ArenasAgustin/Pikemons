import { 
	ADD_POKEMON, GET_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_SEARCH, FILTER_ORIGIN, FILTER_TYPE 
} from "../actions/pokemon.js";
import { GET_TYPES } from "../actions/types.js";

const initialState = {
    pokemonsArray: [],
    pokemonDetail: {},
    pokemonSearch: [],
    typesArray: [],
    newPokemon: {},
    pokemonsFilter: []
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
		case FILTER_ORIGIN:
			return {
				...state,
				pokemonsFilter: payload
			};
		case FILTER_TYPE:
			return {
				...state,
				pokemonsFilter: payload
			};
		default:
			return state;
	}
}