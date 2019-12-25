import React from 'react';
import "./Sidebar.scss";
import SidebarMobile from '../../Components/SidebarToggle/SidebarMobile';
import Button from '../../Components/Button/Button';
import List from '../../Components/List/List';

let overview = "assets/overview.svg";
let wallet = "assets/wallet.svg";
let wallet_complete = "assets/wallet-complete.svg";
let wallet_failed = "assets/wallet_failed.svg";
let manual = "assets/manual.svg";
let all_orders = "assets/all_orders.svg";
let orders_pending = "assets/orders-pending.svg", reconciled_orders = "assets/reconciled_orders.svg";
let person = "assets/person.svg";

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
                   <div className="overview">
                       <List img={overview} text="Overview"/>
                   </div>
                   <p className="main payments">
                       Payments
                   </p>
                   <div className="payment-menu">
                        <List img={wallet} text="All Payments"/>
                        <List img={wallet_complete} text="Reconciled Payments"/>
                        <List img={wallet_failed} text="Un-Reconciled Payments"/>
                        <List img={manual} text="Manual Settlement"/>
                   </div>

                   <p className="main">Orders</p>
                   <div className="order-menu payment-menu">
                       <List img={all_orders} text="All Orders"/>
                       <List img={orders_pending} text="Pending Orders"/>
                       <List img={reconciled_orders} text="Reconciled Orders"/>
                   </div>

                   <div className="main marchant-profile">
                     <List img={person} text="Merchant Profile"/>
                   </div>
                </div>
            </div>

            <div className="mobile-sidebar">
                <SidebarMobile>
                    <div className="mobile-sidebar-contents">
                      <div className="button-mobile">
                        <Button fill="green" color="white" transform="uppercase"> Generate invoice </Button>
                      </div> 
                      <div className="payment-column">
                        <p className="mobile-payments">
                            Payments    
                        </p>
                        <div className="payment-menu-mobi">
                            <List img={wallet} text="All Payments"/>
                            <List img={wallet_complete} text="Reconciled Payments"/>
                            <List img={wallet_failed} text="Un-Reconciled Payments"/>
                            <List img={manual} text="Manual Settlement"/>
                        </div>
                      </div>

                      <div className="payment-column">
                        <p className="mobile-payments">
                            Orders    
                        </p>

                        <div className="payment-menu-mobi">
                        <List img={all_orders} text="All Orders"/>
                        <List img={orders_pending} text="Pending Orders"/>
                        <List img={reconciled_orders} text="Reconciled Orders"/>
                        </div>
                      </div>

                      <div className="merchant-column">
                        <List img={person} text="Merchant Profile"/>
                      </div>
                      
                    </div>
                </SidebarMobile>
            </div>
        </div>
        </>
    )
}

export default Sidebar;
