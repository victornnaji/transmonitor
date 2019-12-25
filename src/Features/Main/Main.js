import React from 'react';
import "./Main.scss";
import Box from '../../Components/Box/Box';
import Chart from '../../Components/Chart/Chart';
import SimpleSelect from '../../Components/Select/Select';
import Table from '../../Components/Table/Table';
// import Select from '../../Components/Select/Select';

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-top-section">
               <div className="side">
                    <Box title="Daily Transaction" numbers="2,434" />
                    <Box title="Daily Transaction Value" numbers="₦4,000,000" />
               </div>
               <div className="side">
                    <Box title="Total Transaction Volume" numbers="452,000" />
                    <Box title="Total Transaction Value " numbers="₦4,000,000" />
               </div>
            </div>

            <div className="main-chart-section">
                <div className="chart-box">
                    {/* <Chart/> */}
                </div>
                <div className="order-payment-box">
                    <div className="order-box">
                        <div className="title">Orders</div>
                        <div class="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: `80%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="pending">pending: <span>20</span></div>
                        <div className="reconciled">Reconciled Order: <span>80</span></div>
                        <div className="total">Total Orders: <span>100</span></div>
                    </div>
                    <div className="order-box">
                        <div className="title">Payments</div>
                            <div class="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: `80%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="pending">Un-Reconciled Payments: <span>20</span></div>
                            <div className="reconciled">Reconciled Payements: <span>80</span></div>
                            <div className="total">Total Payments: <span>100</span></div>
                        </div>
                </div>
            </div>

            <div className="main-graph-section">
               <div className="heading">Payments</div>
               <div className="payment-table-options">
                   <div className="payment-display-number">
                       <span>Showing</span>
                       <SimpleSelect datas={[20, 25, 30]} size="small"/>
                       <span>Out of 500 payments</span>
                   </div>
                   <div className="searchbar-table">
                       <span><img src="assets/Search.svg" alt=""/></span>
                       <input type="text" className="search" name="search" 
                       placeholder="Search payments"/>
                   </div>

                   <div className="show-data-type">
                       <span>Show</span>
                       <SimpleSelect  size= "big" datas={["All", "Reconciled", "Un-Reconciled", "Settled", "Unsettled"]}/>
                   </div>
               </div>
            </div>

            <div className="table-main-content">
                <Table />
            </div>
        </div>
    )
}

export default Main;
