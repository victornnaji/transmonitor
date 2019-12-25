// // STEP 1 - Include Dependencies
// // Include react
// import React from "react";

// // Include the react-fusioncharts component
// import ReactFC from "react-fusioncharts";

// // Include the fusioncharts library
// import FusionCharts from "fusioncharts";

// // Include the chart type
// import Column2D from "fusioncharts/fusioncharts.charts";

// // Include the theme as fusion
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// // STEP 2 - Chart Data
// const chartData = [
//   {
//     label: "Venezuela",
//     value: "290",
//   },
//   {
//     label: "Saudi",
//     value: "260"
//   },
//   {
//     label: "Canada",
//     value: "180"
//   },
//   {
//     label: "Iran",
//     value: "140"
//   },
//   {
//     label: "Russia",
//     value: "115"
//   },
//   {
//     label: "UAE",
//     value: "100"
//   },
//   {
//     label: "US",
//     value: "30"
//   },
//   {
//     label: "China",
//     value: "30"
//   }
// ];

// // STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: "area2d", // The chart type
//   width: `100%`, // Width of the chart
//   height: `330`, // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       caption: "Countries With Most Oil Reserves [2017-18]",
//       subCaption: "In MMbbl = One Million barrels",
//       xAxisName: "Country",
//       yAxisName: "Reserves (MMbbl)",
//       numberSuffix: "K",
//       theme: "fusion"
//     },
//     // Chart Data
//     data: chartData
//   }
// };

// // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class Chart extends React.Component {
//   render() {
//     return <ReactFC {...chartConfigs} />;
//   }
// }

// export default Chart;

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
