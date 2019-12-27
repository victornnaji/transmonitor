import React from 'react';
import "./Charts.scss";

const Chart = () => {
    return (
        <div className="chart-container-holder">
            <div className="chart-top">
                <div className="today">Today: 5, Aug 2018</div>
                <div className="chart-utils">
                    <img src="assets/chart-selection.svg" alt=""/>
                    <img src="assets/Left_Button.svg" alt=""/>
                    <img src="assets/Right_Button.svg" alt=""/>
                </div>
            </div>
            <div className="chart-holder">
                <div className="img-chart"><img src="assets/Gradient.svg" alt="" className="chartt"/></div>
               <div className="months-holder">
                    <div className="months">Jan</div>
                    <div className="months">Feb</div>
                    <div className="months">Mar</div>
                    <div className="months">Apr</div>
                    <div className="months">May</div>
                    <div className="months">Jun</div>
               </div>
            </div>
        </div>
    )
}

export default Chart;
