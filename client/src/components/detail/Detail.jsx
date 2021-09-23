import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonDetail } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Loading from '../loading/Loading';
import images from '../img/img';

export default function Detail({ match }){
	const dispatch = useDispatch();
	const pokemonDetail = useSelector(state => state.pokemonDetail);

	useEffect(() => {
		dispatch(getPokemonDetail(match.params.id, match.params.origin))
	}, [dispatch])

	const {
		sprite, types, hp, name, height, id, attack, defense, special_attack, special_defense, speed, weight, origin
	} = pokemonDetail;

	return(
		<div>
			<NavBar />
			{sprite && types && name  && origin 
				? <div>
				    <div>
				      	<img src={sprite} alt={`Sprite of ${name}`}/>
		
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
		
			      	<div>
				      	<div>
				      		<p>{`${name[0].toUpperCase()}${name.slice(1)}`}</p>
				      		<p>{id}</p>
				      	</div>
				      	
				      	<div>
				      		<div>
				      			<span>Hp: </span>
				      			<progress max='255' value={hp}>{hp}</progress>
				      		</div>
		
				      		<div>
				      			<span>Attack: </span>
				      			<progress max='255' value={attack}>{attack}</progress>
				      		</div>
		
				      		<div>
				      			<span>Defense: </span>
				      			<progress max='255' value={defense}>{defense}</progress>
				      		</div>
		
				      		<div>
				      			<span>Special Attack: </span>
				      			<progress max='255' value={special_attack}>{special_attack}</progress>
				      		</div>
		
				      		<div>
				      			<span>Special Defense: </span>
				      			<progress max='255' value={special_defense}>{special_defense}</progress>
				      		</div>
		
				      		<div>
				      			<span>Speed: </span>
				      			<progress max='255' value={speed}>{speed}</progress>
				      		</div>
				      	</div>
		
				      	<div>
				      		<p>{`Height: ${height}`}</p>
				      		<p>{`Weight: ${weight}`}</p>
				      	</div>
			      	</div>
				</div>

				: <Loading />
			}
		</div>
	);
}