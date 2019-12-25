import React from 'react';
import "./Main.scss";
import Box from '../../Components/Box/Box';

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
                hello
            </div>
        </div>
    )
}

export default Main;
