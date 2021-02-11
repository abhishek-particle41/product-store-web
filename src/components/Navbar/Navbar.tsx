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
        // const offset = window.scrollY;
        // if (offset > 80) {
        //     setScrolled(true);
        // }
        // else {
        //     setScrolled(false);
        // }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }
    const cattItems: any = useSelector((state: RootStore) => state.productReducer);
    let totalItems: Number = 0
    cattItems.map((item: any) => {
        totalItems = totalItems + item.quantity
    })
    return (
        <header className={x.join(" ")}>
            <nav className="navbar navbar-expand-lg">
                <ul className='nav-menu'>
                    <Link className="nav-links-home" to='/'>
                        <Home style={{ fontSize: 50 }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <SearchBar
                        className="search-bar"
                        onChange={(newValue) => handleChange(newValue)} />
                    <Link className="nav-links-cart" to='/cart'>
                        <span className="dot"></span>
                        <div className="nav-links-cart-items">{totalItems}</div>
                        <ShoppingCart style={{ fontSize: 40 }} />
                    </Link>
                </ul>
            </nav>

        </header>
        // <nav className="navbar navbar-expand-lg navbar-light">
        //     {/* <a className="navbar-brand" href="#">Navbar</a> */}
        //     <Link className="nav-links-home" to='/'>
        //         <Home style={{ fontSize: 50 }} />
        //     </Link>
        // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        // </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <div className="search-bar">
        //                 <SearchBar
        //                     className="search-bar"
        //                     onChange={(newValue) => handleChange(newValue)} />
        //             </div>
        //             <Link className="nav-links-cart" to='/cart'>
        //                 {/* <span className="dot"></span> */}
        //                 <div className="nav-links-cart-items">{totalItems}</div>
        //                 <ShoppingCart style={{ fontSize: 40 }} />
        //             </Link>
        //         </ul>
        //     </div>
        // </nav>
    )
};

export default Navbar;
