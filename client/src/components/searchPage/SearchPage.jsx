import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';
import SearchBar from '../searchBar/SearchBar';
import './SearchPage.css';

export default function SearchPage(){
	const pokeArray = useSelector(state => state.pokemonSearch);

	return(
		<div>
			<NavBar />
			<div className='searchPageBack'>
				<SearchBar/>
				<Cards pokeArrCards={[...pokeArray].slice(0, 12)}/>
			</div>
		</div>
	)
}