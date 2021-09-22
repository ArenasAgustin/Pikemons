import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Pages from '../pages/Pages';
import Loading from '../loading/Loading';

export default function Home(){
	const dispatch = useDispatch();
	const pokeArray = useSelector(state => state.pokemonsArray);	 

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch])

	return(
		<div>
			<NavBar />
			{pokeArray.length
				? <Pages pokeArray={pokeArray}/>
				: <Loading />
			}
		</div>
	)
}
