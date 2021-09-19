import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="" alt=""/>
      </div>

      <div>
        <SearchBar/>
      </div>

      <div>
        <div>
          <Link to="/home">
            <h2>Home</h2> 
          </Link>
        </div>

        <div>
          <Link to="/create">
            <h2>Create Pokemon</h2> 
          </Link>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;