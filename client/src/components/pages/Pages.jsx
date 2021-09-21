import React from 'react';
import Cards from '../cards/Cards';

export default function Pages({pokeArrPages, next, prior}) {
	return(
		<div>
			<div>
				<button onClick={prior}>{'<--'}</button>
				<button onClick={next}>{'-->'}</button>
			</div>

			<Cards pokeArrCards = {pokeArrPages}/>

			<div>
				<button onClick={prior}>{'<--'}</button>
				<button onClick={next}>{'-->'}</button>
			</div>
		</div>
	)
}