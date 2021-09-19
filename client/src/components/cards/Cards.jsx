import React from 'react';
import Card from '../card/Card';

export default function Cards({pArr}){
	return(
		<div>
			{
				pArr.map(poke => <Card 
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