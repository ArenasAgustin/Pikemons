import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';
import Pages from '../pages/Pages';
import SearchBar from '../searchBar/SearchBar';

export default function SearchPage(){
	const pokeArray = useSelector(state => state.pokemonSearch);
	const [pokeSearch, setPokeSearch] = useState(pokeArray);

	useEffect(() => {
		setPokeSearch(pokeArray);
	}, [pokeArray])

	return(
		<div>
			<NavBar />
			<SearchBar/>
			<Cards pokeArrCards={pokeArray}/>
		</div>
	)
}