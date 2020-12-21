import React from 'react';
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <ul>
                <Link to='/details'>
                    <li className="nav-links">Home</li>
                </Link>
                <Link to='/cart'>
                    <li className="nav-links">Cart</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
