import React from 'react';
import "./Navbar.scss";
import SearchBar from '../../Components/SearchBar/SearchBar';
import Burger from '../../Components/BurgerMenu/Burger';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="brand-search">
                        <div className="brand">
                            TransMonitor
                        </div>
                        <div className="searchbar">
                            <SearchBar text="search..."/>
                        </div>
                    </div>

                    <div className="menu-items">
                        <div className="desktop">hello desktop</div>
                        <div className="mobile">
                            <Burger />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

