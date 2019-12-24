import React from 'react';
import "./Sidebar.scss";
import SidebarMobile from '../../Components/SidebarToggle/SidebarMobile';
import Button from '../../Components/Button/Button';

const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="containerr">
                   <div className="desktop-sidebar-contents">
                      <Button fill="green" color="white" transform="uppercase"> Generate invoice </Button> 
                   </div>
                   <p className="main">Main</p>
                </div>
            </div>

            <div className="mobile-sidebar">
                <SidebarMobile>
                    <div className="mobile-sidebar-contents">
                      <div className="button-mobile">
                        <Button fill="green" color="white" transform="uppercase"> Generate invoice </Button>
                      </div> 
                        <p>hi</p>
                    </div>
                </SidebarMobile>
            </div>
        </div>
        </>
    )
}

export default Sidebar;
