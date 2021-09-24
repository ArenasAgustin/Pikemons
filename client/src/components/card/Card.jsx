import React from 'react';
import { Link } from 'react-router-dom';
import images from '../img/img';
import './Card.css'

function Card({id, sprite, types, name, origin}){
	return(
		<div className='card'>
			<div className='backgroundPoke'>
				<p className='idPoke'>{`#${id}${origin[0].toUpperCase()}`}</p>
				<img src={sprite} alt={`Sprite of ${name}`} className='imgPoke'/>
			</div>

			<div className='cardDescription'>
				<Link to={`/pokemon/${id}/${origin}`} className='namePoke'>
					<p className='capitalizeText'>{name}</p>
				</Link>
				
				<div className='divTypeImg'>
					{types.length === 1
						? <img src={images[types[0]]} alt={`Type: ${types[0]}`} className='typeImg'/>
						: <div>
							<img src={images[types[0]]} alt={`Type 1: ${types[0]}`} className='typeImg'/>
						  	<img src={images[types[1]]} alt={`Type 2: ${types[1]}`} className='typeImg'/>
						  </div>
					}	
				</div>
			</div>
		</div>
	)
}

export default Card;