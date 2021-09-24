import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonSearch } from '../../actions/pokemon';
import './SearchBar.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleChange({target}){
        setName(target.value);
        
    }
   function handleSubmit(e){
       	e.preventDefault();
      	dispatch(getPokemonSearch(name));
      	setName('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={name} className='searchInput'/>
            <button type='submit' className='searchBtn'>Search</button>
        </form>
    )
}