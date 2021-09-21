import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>
          <img src='https://fontmeme.com/permalink/210920/2236f4bb095596eb7570e41e89d19354.png' alt='Pikémon'/>
        </Link>
      </div>

      <div>
        <div>
          <Link to='/home'>
            <h2>Home</h2> 
          </Link>
        </div>

        <div>
          <Link to='/search'>
            <h2>Search</h2> 
          </Link>
        </div>

        <div>
          <Link to='/create'>
            <h2>Create Pokemon</h2> 
          </Link>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;