import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = (props) => {
  return (
  	<nav>
			<ul className="navbar">
				<li className="navbar__list"><NavLink className="navbar__link" exact to="/" activeStyle={{color: '#A9A9A9'}}>Get Weather</NavLink></li>
				<li className="navbar__list navbar__list--flex"><NavLink className="navbar__link" to="/about" activeStyle={{color: '#A9A9A9'}}>About</NavLink></li>
				<li className="navbar__list"><NavLink className="navbar__link" to="/examples" activeStyle={{color: '#A9A9A9'}}>Examples</NavLink></li>
			</ul>
		</nav>	
  )
}

export default Navbar;