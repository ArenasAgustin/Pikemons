import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Pages from '../pages/Pages';
import './Home.css';

export default function Home(){
	const dispatch = useDispatch();

	//Dispatch de busqueda de pokes
	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch])

	return(
		<div>
			<NavBar />
			<Pages />
		</div>
	)
}
