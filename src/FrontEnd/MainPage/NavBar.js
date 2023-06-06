import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <div className='logo'>
                DeliDash
            </div>
            <nav className='item'>
                <li>
                    <NavLink to="/" props>Home</NavLink>
                </li>
            </nav>
        </div>
    )
}

export default NavBar