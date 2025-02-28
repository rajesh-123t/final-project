import React from 'react';
import logo from './assets/Logo .svg'
import { Link } from 'react-router-dom';
const Nav= () => {
  return (
    <div className='nav'>
              <img src={logo} alt='website log'/>
              <ul className="navigation">
                <li><Link to="/" aria-label="Go to Home Page">Home</Link></li>
                <li><Link to="/reservation" aria-label="Reserve a Table">reservation</Link></li>
              </ul>
    </div>
  );
};
export default Nav;
