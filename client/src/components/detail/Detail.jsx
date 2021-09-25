import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonDetail, removeDetail } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import Loading from '../loading/Loading';
import images from '../img/img';
import './Detail.css';

export default function Detail({ match }){
	const dispatch = useDispatch();
	const pokemonDetail = useSelector(state => state.pokemonDetail);

	//Busco el detalle
	useEffect(() => {
		dispatch(getPokemonDetail(match.params.id, match.params.origin));
		return dispatch(removeDetail());
	}, [dispatch])

	//Desestructuro los detalles
	const {
		sprite, types, hp, name, height, id, attack, defense, special_attack, special_defense, speed, weight, origin
	} = pokemonDetail;

	return(
		<div>
			<NavBar />
			{sprite && types && name  && origin 
				? <div className='detailBackground'>
				    <div className='detailDivImg'>
				      	<img src={sprite} alt={`Sprite of ${name}`} className='detailImg'/>
		
				      	<div>
							{types.length === 1
								? <img src={images[types[0]]} alt={`Type: ${types[0]}`} className='detailType'/>
								: <div>
									<img src={images[types[0]]} alt={`Type 1: ${types[0]}`} className='detailType'/>
								  	<img src={images[types[1]]} alt={`Type 2: ${types[1]}`} className='detailType'/>
								  </div>
							}	
						</div>
			      	</div>
		
			      	<div className='divDetail'>
				      	<div className='opacityNormal divNameId'>
				      		<p className='capitalizeText'>{name}</p>
				      		<p className='divId'>{`${id} ${origin === 'api' ? 'Poke' : 'Fandom'}`}</p>
				      	</div>
				      	
				      	<div className='opacityNormal'>
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Hp: ${hp}`}</span></div>
				      			<progress max='255' value={hp} className='divPStats'>{hp}</progress>
				      		</div>
		
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Attack: ${attack}`}</span></div>
				      			<progress max='255' value={attack} className='divPStats'>{attack}</progress>
				      		</div>
		
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Defense: ${defense}`}</span></div>
				      			<progress max='255' value={defense} className='divPStats'>{defense}</progress>
				      		</div>
		
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Special Attack: ${special_attack}`}</span></div>
				      			<progress max='255' value={special_attack} className='divPStats'>{special_attack}</progress>
				      		</div>
		
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Special Defense: ${special_defense}`}</span></div>
				      			<progress max='255' value={special_defense} className='divPStats'>{special_defense}</progress>
				      		</div>
		
				      		<div className='divSStats'>
				      			<div className='divSpanStats'><span>{`Speed: ${speed}`}</span></div>
				      			<progress max='255' value={speed} className='divPStats'>{speed}</progress>
				      		</div>
				      	</div>
		
				      	<div className='opacityNormal'>
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