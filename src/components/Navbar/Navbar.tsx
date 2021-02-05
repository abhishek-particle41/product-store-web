import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import { Home, ShoppingCart } from '@material-ui/icons';
import SearchBar from "material-ui-search-bar";
import { RootStore } from '../../utils/store/store'
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../utils/store/Search/searchItemActions';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const dispatch = useDispatch();
    const handleChange = (value: string) => {
        dispatch(updateSearch(value.trim()));
    }
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
    }, [])
    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }
    const cattItems: any = useSelector((state: RootStore) => state.productReducer);
    return (
        <header className={x.join(" ")}>
            <nav className="navbar">
                <ul className='nav-menu'>
                    <Link className="nav-links-home" to='/'>
                        <Home style={{ fontSize: 50 }} />
                    </Link>
                    <SearchBar
                        className="search-bar"
                        onChange={(newValue) => handleChange(newValue)}
                    />
                    <Link className="nav-links-cart" to='/cart'>
                        <span className="dot"></span>
                        <div className="nav-links-cart-items">{cattItems.length}</div>
                        <ShoppingCart style={{ fontSize: 40 }} />
                    </Link>
                </ul>
            </nav>

        </header>
    )
};

export default Navbar;
