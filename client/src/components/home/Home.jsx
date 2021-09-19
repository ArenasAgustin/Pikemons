import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';

const countCards = 12;
export default function Home(){
	const dispatch = useDispatch();
	const pokeArray = useSelector(state => state.pokemonsArray);

	useEffect(() => {
		dispatch(getPokemons())
	}, [dispatch])

	return(
		<div>
			<NavBar />
			<Cards pArr = {[...pokeArray].splice(0, 12)}/>
		</div>
	)
}
