import React from 'react';
import Card from '../card/Card';
import './Cards.css'

export default function Cards({pokeArrCards}){
	return(
		<div className='cardsGrid'>
			{
				pokeArrCards.map(poke => <Card 
						key={poke.id}
						id={poke.id}
						name={poke.name}
						sprite={poke.sprite}
						types={poke.types}
						origin={poke.origin}
					/>)
			}
		</div>
	)
};