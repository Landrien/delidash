import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='Fond'>
            <t1>
                DeliDash
            </t1>
            <nav className='item'>
                <li>
                    <NavLink to="/" props>Home</NavLink>
                </li>
            </nav>
        </div>
    )
}

export default NavBar