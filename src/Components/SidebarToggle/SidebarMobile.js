import React, { useState } from 'react';
import Burger from '../BurgerMenu/Burger';
import "./SidebarMobile.scss";

const SidebarMobile = ({children}) => {
    const [open, setOpen] = useState(false);

    const toggleMenu = (clicked) => {
        setOpen(!clicked);
    }
    
    return (
        <>
        <div className={`sidebar-mobile-container ${open && "visibility"}`}>
            {children}
        </div>
        <div className="burger">
        <Burger toggleMenu={toggleMenu}/>
        </div>
        </>
    )
}

export default SidebarMobile;
