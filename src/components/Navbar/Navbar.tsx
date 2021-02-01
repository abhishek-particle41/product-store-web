import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import { Home, ShoppingCart } from '@material-ui/icons';
import SearchBar from "material-ui-search-bar";
import store from '../../utils/store/store'
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../utils/store/Search/searchItemActions';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch();
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
    const handleChange = (value: string) => {
        dispatch(updateSearch(value));
    }

    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }
    let cattItems: any = store.getState().productReducer
    return (
        <header className={x.join(" ")}>
            <nav className="navbar">
                <ul className='nav-menu'>
                    <Link className="nav-links-home" to='/'>
                        <Home fontSize="large" />
                    </Link>
                    <SearchBar
                        className="search-bar"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        onRequestSearch={() => handleChange(value)}
                    />
                    <Link className="nav-links-cart" to='/cart'>
                        <span className="dot"></span>
                        <div className="nav-links-cart-items">{cattItems.length}</div>
                        <ShoppingCart fontSize="large" />
                    </Link>
                </ul>
            </nav>

        </header>
    )
};

export default Navbar;
