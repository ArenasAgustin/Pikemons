import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { filterType } from '../../actions/pokemon';
import Pages from '../pages/Pages';
import Loading from '../loading/Loading';

const arrTypes = ['all', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
const arrOrder = ['default', 'a-Z', 'z-A', 'highest_Attack', 'highest_Defense', 'highest_Special_Attack', 'highest_Special_Defense', 'highest_Speed', 'highest_Height', 'highest_Weight'];

export default function Filter(){
	const pokeArray = useSelector(state => state.pokemonsArray);
	const [pokemonsFilter, setPokemonsFilter] = useState(pokeArray);

	useEffect(() => {
		filterType(pokemonsFilter);
	}, [pokemonsFilter])

	const handleFilterTypes = async (e) => {
		let arrAux = [];

		if(pokemonsFilter === [] || e.target.value === 'all' || !e.target.value) arrAux = pokeArray
		else arrAux = pokemonsFilter;

		console.log(arrAux)
		arrAux = arrAux.filter(poke => poke.types[0] === e.target.value || poke.types[1] === e.target.value);

		console.log(arrAux)
		await setPokemonsFilter(arrAux);
		console.log(pokemonsFilter)
	}

	return(
		<div>
			<div>
				<select name='filterTypes' onChange={handleFilterTypes}>
					{arrTypes.map(type => 
						<option value={type} key={type}>{`${type[0].toUpperCase()}${type.slice(1)}`}</option>
					)}
				</select>

				<select name='filterOrigin'>
					<option value='default'> Default </option>
					<option value='api'> Api </option>
					<option value='db'> Fandom </option>
				</select>

				<select name='order'>
					{arrOrder.map(order => 
						<option value={order} key={order}>{`${order[0].toUpperCase()}${order.slice(1).replaceAll('_', ' ')}`}</option>
					)}
				</select>

				{pokeArray.length
					? <Pages pokeArray={pokeArray}/>
					: <Loading />
				}
			</div>
		</div>
	)
}