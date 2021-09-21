import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonSearch } from '../../actions/pokemon';

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
        <div>
            <input type='text' onChange={handleChange} value={name}/>
            <button type='submit' onClick={handleSubmit}>Search</button>
        </div>
    )
}