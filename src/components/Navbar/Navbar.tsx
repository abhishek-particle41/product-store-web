import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import { Home, ShoppingCart } from '@material-ui/icons';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav">
                <Link to='/'>
                    <Home className="home-icon" fontSize="large" />
                </Link>
                <Link to='/cart'>
                    <ShoppingCart className="cart-icon" fontSize="large" />
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
