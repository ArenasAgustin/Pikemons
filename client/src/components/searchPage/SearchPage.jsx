import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';
import SearchBar from '../searchBar/SearchBar';

const countCards = 12;
export default function SearchPage(){
	const [ pokeSearched, setPokeSearched ] = useState([]);
	const pokeArray = useSelector(state => state.pokemonSearch);

	useEffect(() => {
		setPokeSearched([...pokeArray].splice(0, countCards))
	}, [pokeArray])

	return(
		<div>
			<NavBar />
			<SearchBar/>
			<Cards pokeArrCards = {pokeSearched}/>
		</div>
	)
}