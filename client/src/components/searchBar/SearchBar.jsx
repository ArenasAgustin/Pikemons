import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonSearch } from '../../actions/pokemon';

function SearchBar(){
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	function handleChange(event){
		setName(event.target.value)
	}

	function handleSubmit(event){
		event.preventDefault();
		dispatch(getPokemonSearch(name));
		setName('');
	}

	return(
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				id="name"
				autoComplete="off"
				onChange={e => handleChange(e)}
			/>

			<Link to={`/search`}>
				<button type="submit">Search</button>
			</Link>
		</form>
	)
}

export default SearchBar;