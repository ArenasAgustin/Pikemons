import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../cards/Cards';
import ButtonPage from './buttonPage/ButtonPage';
import Filter from '../filter/Filter';
import Loading from '../loading/Loading';

export default function Pages(){
	//Arrays de pokes
	const pokeArray = useSelector(state => state.pokemonsArray);
	const [pokeArrPages, setPokeArrPages] = useState([]);

	useEffect(() => {
		setPokeArrPages(pokeArray);
	}, [pokeArray])

	//Auxiliares de filtros
	const [errorFilter, setErrorFilter] = useState(false); //Si no hay pokes del tipo o origen mostrar error
	const [filterOriginUsed, setFilterOriginUsed] = useState('default');
	const [copyOfArr, setCopyOfArr] = useState([]);
	const [orderArr, setOrderArr] = useState('default');

	//Cantidad de cards
	const [currentPage, setCurrentPage] = useState(1);
	const [countCards, setCountCards] = useState(12);

	//Cantidad de botones
	const [pageNumberLimit, setPageNumberLimit] = useState(5);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	//Arreglo con los botones
	const pages = [];
	for(let i = 1; i <= Math.ceil(pokeArrPages.length/countCards); i++) pages.push(i);

	//Funcion para cambiar la pagina
	const handleClick = event => {
		setCurrentPage(Number(event.target.id))
	}

	//Cambios de paginas
	const indexLastItem = currentPage * countCards;
	const indexFirstItem = indexLastItem - countCards;
	const pokesArr = pokeArrPages.slice(indexFirstItem, indexLastItem);

	//Funcion de siguiente
	const handleNext = () => {
		setCurrentPage(currentPage + 1);

		if(currentPage + 1 > maxPageNumberLimit){
	      	setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
	    	setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
	    }
	}

	//Funcion de anterior
	const handlePrev = () => {
		setCurrentPage(currentPage - 1);

		if((currentPage - 1) % pageNumberLimit === 0){
	      	setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
	    	setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
	    }
	}

	//Funcion de filtrado de tipos
	const handleFilterTypes = value => {
		let arrAux = pokeArray;

		if(value !== 'all') arrAux = arrAux.filter(poke => poke.types[0] === value || poke.types[1] === value);

		setPokeArrPages(arrAux);
		setOrderArr('default');
	}

	//Funcion de filtrado por origen
	const handleFilterOrigin = value => {
		let arrAux = pokeArrPages;

		if(value !== 'default') arrAux = arrAux.filter(poke => poke.origin === value);
		if(!arrAux.length && value !== 'default') arrAux = [...pokeArray].filter(poke => poke.origin === value)
		
		setFilterOriginUsed(value);
		setPokeArrPages(arrAux);
		setOrderArr('default');
	}

	const handleOrder = value => {
		let arrAux = [];

		if(orderArr === 'default') setCopyOfArr(pokeArrPages);

		switch(value){
			case 'a-Z':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.name.toLowerCase() < poke2.name.toLowerCase()) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			case 'z-A':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.name.toLowerCase() > poke2.name.toLowerCase()) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			case 'highest_Attack':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.attack > poke2.attack) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			case 'lowest_Attack':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.attack < poke2.attack) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			case 'highest_Defense':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.defense > poke2.defense) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			case 'lowest_Defense':
				arrAux = [...pokeArrPages].sort((poke1, poke2) => {
					if(poke1.defense < poke2.defense) return -1
					return 1;
				})

				setOrderArr(value);
				setPokeArrPages(arrAux);
				break;

			default:
				setOrderArr('default');
				setPokeArrPages(copyOfArr);
				break;
		}
	}

	return(
		<div  className='home'>
			<Filter 
				handleFilterTypes={handleFilterTypes}
				handleFilterOrigin={handleFilterOrigin}
				handleOrder={handleOrder}
			/>

			<ButtonPage 
				pages={pages} 
				handleClick={handleClick} 
				currentPage={currentPage}
				maxPageNumberLimit={maxPageNumberLimit}
				minPageNumberLimit={minPageNumberLimit}
				handleNext={handleNext}
				handlePrev={handlePrev}
			/>

			{pokesArr.length
				? <Cards pokeArrCards = {pokesArr}/>
				: <Loading />
			}

			<ButtonPage 
				pages={pages} 
				handleClick={handleClick} 
				currentPage={currentPage}
				maxPageNumberLimit={maxPageNumberLimit}
				minPageNumberLimit={minPageNumberLimit}
				handleNext={handleNext}
				handlePrev={handlePrev}
			/>
		</div>
	)
}