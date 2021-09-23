import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navContainer'>
      <div>
        <Link to='/'>
          <img src='https://fontmeme.com/permalink/210920/2236f4bb095596eb7570e41e89d19354.png' alt='Pikémon'  className='navImg'/>
        </Link>
      </div>

      <div className='navContainerButtons'>
        <div className='navDivButtons'>
          <Link to='/home' className='navButtons'>
            <h2>Home</h2> 
          </Link>
        </div>

        <div className='navDivButtons'>
          <Link to='/search' className='navButtons'>
            <h2>Search</h2> 
          </Link>
        </div>

        <div className='navDivButtons'>
          <Link to='/create' className='navButtons'>
            <h2>Create Pokemon</h2> 
          </Link>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;