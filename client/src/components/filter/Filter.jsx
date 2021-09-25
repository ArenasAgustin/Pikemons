import React, { useState } from 'react';
import './Filter.css';

const arrTypes = [
	'all', 
	'bug', 
	'dark', 
	'dragon', 
	'electric', 
	'fairy', 
	'fighting', 
	'fire', 
	'flying', 
	'ghost', 
	'grass', 
	'ground', 
	'ice', 
	'normal', 
	'poison', 
	'psychic', 
	'rock', 
	'steel', 
	'water'
];
const arrOrder = [
	'default', 
	'a-Z', 
	'z-A', 
	'highest_Attack', 
	'lowest_Attack',
	'highest_Defense',
	'lowest_Defense'
];

export default function Filter({handleFilterTypes, handleFilterOrigin, handleOrder}){
	const [filterFomr, setFilterForm] = useState(false);

	//Funcion para mostrar los filters
	const handleFilters = () => {
		setFilterForm(!filterFomr);
	}

	return(
		<div>
			<div>
				{filterFomr 
					? <div className='filterBackground'>
						<select 
							name='filterTypes' 
							onChange={e => handleFilterTypes(e.target.value)} 
							className='capitalizeText selectFilter'
						>
							{arrTypes.map(type => 
								<option value={type} key={type}>{type}</option>
							)}
						</select>

						<select 
							name='filterOrigin' 
							className='selectFilter'
							onChange={e => handleFilterOrigin(e.target.value)}
						>
							<option value='default'> Default </option>
							<option value='api'> Api </option>
							<option value='db'> Fandom </option>
						</select>

						<select 
							name='order' 
							className='capitalizeText selectFilter'
							onChange={e => handleOrder(e.target.value)}
						>
							{arrOrder.map(order => 
								<option 
									value={order} 
									key={order}
								>{order.replaceAll('_', ' ')}</option>
							)}
						</select>
					</div>

					:null
				}
				<button onClick={handleFilters} className='filterButton'>Filters</button>
			</div>
		</div>
	)
}