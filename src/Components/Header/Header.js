import React from 'react';
import './HeaderStyle.css';
import Logo from '../../images/logo48.png';
import Cart from '../../images/shoppingcart.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <NavLink to='/'><img src={Logo} className='logo' alt="lookz" /></NavLink>

            <div>
                <ul className='navbar'>
                    <li> <NavLink className={(navData) => navData.isActive ? "active-link link" : "link"} to="/home">Home</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active-link link" : "link"} to="/shop">Shop</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active-link link" : "link"} to="/blog">Blog</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active-link link" : "link"} to="/about">About</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active-link link" : "link"} to="/contact">Contact</NavLink></li>
                    <li> <NavLink to="/cart"><img src={Cart} alt="cart" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
