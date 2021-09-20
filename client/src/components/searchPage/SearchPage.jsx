import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';

const countCards = 12;
export default function SearchPage(){
	const dispatch = useDispatch();
	const pokeArray = useSelector(state => state.pokemonSearch);

	// useEffect(() => {
	// 	dispatch();
	// }, [dispatch])

	return(
		<div>
			<NavBar />
			<Cards pArr = {[...pokeArray].splice(0, 12)}/>
		</div>
	)
}