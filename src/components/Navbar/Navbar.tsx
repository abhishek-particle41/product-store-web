import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import { Home, ShoppingCart } from '@material-ui/icons';
import SearchBar from "material-ui-search-bar";

interface state {
    clicked: boolean;
}

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 80) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }
    return (
        <header className={x.join(" ")}>
            <nav className="navbar">
                <ul className='nav-menu'>
                    <Link className="nav-links-home" to='/'>
                        <Home fontSize="large" />
                    </Link>
                    <SearchBar className="search-bar" />
                    <Link className="nav-links-cart" to='/cart'>
                        <span className="dot"></span>
                        <div className="nav-links-cart-items">20</div>
                        <ShoppingCart fontSize="large" />
                    </Link>
                </ul>
            </nav>

        </header>
    )
};

export default Navbar;
