import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Filter from '../filter/Filter';
import './Home.css';

export default function Home(){
	const dispatch = useDispatch();
	const pokeArray = useSelector(state => state.pokemonsFilter);	 

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch])

	return(
		<div className='home'>
			<NavBar />
			<Filter />
		</div>
	)
}
