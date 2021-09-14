import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function NavBar({onSearch}) {
  return (
    <nav className={}>
        <a href = "../home" className = {}>
          	<h2 className = {styleNav.home}>Henry Wather App</h2> 
        </a>

        <SearchBar
          	onSearch={onSearch}
          	className={}
        />
    </nav>
  );
};

export default Nav;