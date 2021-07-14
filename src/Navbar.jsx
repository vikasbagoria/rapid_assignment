
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
         <div className="main">
            <div className="navbar">
            <div className="logo"><NavLink exact to="/" style={{ textDecoration: 'none' }}><h1>Landkit.</h1></NavLink></div>
                <ul className="nav-list">
                    
                    <li> <NavLink exact to="/">Landings</NavLink></li>
                    <li> <NavLink exact to="/about">Pages</NavLink></li>
                    <li> <NavLink exact to="/contact">Account</NavLink></li>
                    <li> <NavLink exact to="/">Documentation</NavLink></li>
                </ul>
                <div className="rightNav">
                    <button className="btn_buy">Buy Now</button>
                </div>
            </div>
            </div>
            <div>

            </div>   
        </>
    )
}

export default Navbar
