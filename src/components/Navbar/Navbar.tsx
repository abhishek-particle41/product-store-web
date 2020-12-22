import React from 'react';
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { Home, ShoppingCart } from '@material-ui/icons';

function Navbar() {
    return (
        <div className="nav">
            <ul>
                <Link to='/'>
                    <Home fontSize="large" />
                </Link>
                <Link to='/cart'>
                    <ShoppingCart fontSize="large" />
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
