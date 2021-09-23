import React, { useState } from 'react';
import Cards from '../cards/Cards';
import ButtonPage from './buttonPage/ButtonPage';

export default function Pages({pokeArray}) {
	const [pokeArrPages, setPokeArrPages] = useState(pokeArray);

	const [currentPage, setCurrentPage] = useState(1);
	const [countCards, setCountCards] = useState(12);

	const [pageNumberLimit, setPageNumberLimit] = useState(5);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const pages = [];
	for(let i = 1; i <= Math.ceil(pokeArrPages.length/countCards); i++) pages.push(i);

	const handleClick = event => {
		setCurrentPage(Number(event.target.id))
	}

	const indexLastItem = currentPage * countCards;
	const indexFirstItem = indexLastItem - countCards;
	const pokesArr = pokeArrPages.slice(indexFirstItem, indexLastItem);

	const handleNext = () => {
		setCurrentPage(currentPage + 1);

		if(currentPage + 1 > maxPageNumberLimit){
	      	setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
	    	setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
	    }
	}

	const handlePrev = () => {
		setCurrentPage(currentPage - 1);

		if((currentPage - 1) % pageNumberLimit === 0){
	      	setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
	    	setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
	    }
	}

	return(
		<div>
			<ButtonPage 
				pages={pages} 
				handleClick={handleClick} 
				currentPage={currentPage}
				maxPageNumberLimit={maxPageNumberLimit}
				minPageNumberLimit={minPageNumberLimit}
				handleNext={handleNext}
				handlePrev={handlePrev}
			/>

			<Cards pokeArrCards = {pokesArr}/>

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