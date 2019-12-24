import React from 'react';
import "./Navbar.scss";
import SearchBar from '../../Components/SearchBar/SearchBar';

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
                        hello
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

