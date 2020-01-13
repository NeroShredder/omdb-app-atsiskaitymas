import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom'


function Nav() {
    return(
        <nav>
            
            <ul className="nav-links">
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to= "/movielist">
                <li>Movies list</li>
                </Link>
                <Link to= "/">
                <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;