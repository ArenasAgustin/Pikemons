import React, { useState } from "react";
import { Link } from 'react-router-dom';

function SearchBar(){
	const [name, setName] = useState('');

	function handleChange(event){
		setName(event.target.value)
	}

	function handleSubmit(event){
		event.preventDefault();
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

			<Link to={`/pokemon/${name}`}>
				<button type="submit">Search</button>
			</Link>
		</form>
	)
}

export default SearchBar;