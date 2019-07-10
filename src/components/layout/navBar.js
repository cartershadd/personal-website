import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar bg-dark'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/lines'>Crazy Lines</Link>
                </li>
                <li>
                    <Link to='/curved'>Curved Lines</Link>
                </li>
                <li>
                    <Link to='/smile'>Smile!</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;