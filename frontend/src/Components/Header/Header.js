import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {

    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    }

    const closeMenu = () => {
        document.querySelector('.sidebar.open').classList.remove('open');
    }

    return (
        <>
            <div className='header'>
                <div className="header__brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>

                    <Link to='/'>e-commerce</Link>

                </div>

                <div className="header__links">
                    <Link to="/cart">Cart</Link>
                    <Link to="/signin">SignIn</Link>
                </div>
            </div>

            <div className='sidebar'>
                <h3>Shopping categories</h3>
                <button className='sidebar__closeButton' onClick={closeMenu}> x</button>
                <ul>
                    <li>
                        <a href="index.html"></a>
                    </li>

                    <li>
                        <a href="index.html"></a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;