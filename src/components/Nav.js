import React from 'react';
import logo from '../assets/Logo.svg'; 


function Nav(){
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            {/* Desktop Nav */}
            <ul className='nav-list'>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;