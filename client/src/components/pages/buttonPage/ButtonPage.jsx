import React from 'react';
import './ButtonPage.css';

export default function ButtonPage({
	pages, 
	handleClick, 
	currentPage, 
	minPageNumberLimit, 
	maxPageNumberLimit, 
	handleNext, 
	handlePrev,
}){
	return(
		<ul className='pageButtons'>
			<li className='btnLi'>
				<button 
					className='btn' 
					onClick={handlePrev}
					disable={currentPage === pages[0] ? true : false}
				>Prev</button>
			</li>

			{pages.map(number => {
				if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
				return(
					<li 
						key={number} 
						id={number} 
						onClick={handleClick}
						className={currentPage === number ? 'activeButton' : 'pageLi'}
					>
						{number}
					</li>
				)
			}

			else return null;
			})}

			<li className='btnLi'>
				<button 
					className='btn' 
					onClick={handleNext}
					disable={currentPage === pages[pages.length - 1] ? true : false}
				>Next</button>
			</li>
		</ul>
	)
	
}