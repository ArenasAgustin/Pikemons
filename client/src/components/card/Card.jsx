import React from 'react';
import { Link } from 'react-router-dom';
import images from '../img/img';

function Card({id, sprite, types, name, origin}){
	return(
		<div>
			<div>
				<p>{id}</p>
				<img src={sprite} alt={`Sprite of ${name}`}/>
			</div>

			<div>
				<Link to={`/pokemon/${id}/${origin}`}>
					<p>{name}</p>
				</Link>
				
				<div>
					{types.length === 1
						? <img src={images[types[0]]} alt={`Type: ${types[0]}`}/>
						: <div>
							<img src={images[types[0]]} alt={`Type 1: ${types[0]}`}/>
						  	<img src={images[types[1]]} alt={`Type 2: ${types[1]}`}/>
						  </div>
					}	
				</div>
			</div>
		</div>
	)
}

export default Card;