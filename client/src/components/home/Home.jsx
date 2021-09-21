import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Pages from '../pages/Pages';
import Loading from '../loading/Loading';

const countCards = 12;
export default function Home(){
	const dispatch = useDispatch();
	const pokeArray = useSelector(state => state.pokemonsArray);
	const [pokeArrPages, setPokeArrPages] = useState([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch])

	useEffect(() => {
		setPokeArrPages([...pokeArray].splice(0, countCards))
	}, [pokeArray])

	const next = () => {
		const auxNext = page + 1;
		const firstPoke = auxNext * countCards;

		if(firstPoke > pokeArray.length) return;

		setPokeArrPages([...pokeArray].splice(firstPoke, countCards));
		setPage(auxNext)
	}

	const prior = () => {
		const auxPrev = page - 1;

		if(auxPrev < 0) return;

		const firstPoke = page * countCards;
		setPokeArrPages([...pokeArray].splice(firstPoke, countCards));
		setPage(auxPrev);
	}

	return(
		<div>
			<NavBar />
			{pokeArray.length
				? <Pages pokeArrPages={pokeArrPages} next={next} prior={prior}/>
				: <Loading />
			}
		</div>
	)
}
