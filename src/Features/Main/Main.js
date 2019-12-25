import React, { useState, useEffect } from 'react';
import "./Main.scss";
import Box from '../../Components/Box/Box';
import Chart from '../../Components/Chart/Chart';
import SimpleSelect from '../../Components/Select/Select';
import Table from '../../Components/Table/Table';
import Pagination from "react-js-pagination";



const Main = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(5);
    const [numPage, setNumPage] = useState(dataPerPage);
    const [dataType, setDataType] = useState("All");
    const [newData, setnewData] = useState([]);

   const selectedPageNumber = (num) => {
        if(typeof(num.value) == "number"){
            setNumPage(num.value);
        }
        else{
            setDataType(num.value);
        }
    }
    useEffect(() => {
        setDataPerPage(numPage)
    }, [numPage]);


    const paginate = (pn) => {
        setCurrentPage(pn)
    }; 

    useEffect(() => {
        setLoading(true);
       fetch('data/table_data.json')
       .then(res => res.json())
       .then(data => setData(data))
       setLoading(false);
    }, []);

    useEffect(() => {
        let newData = datas.filter(x => {
            if(dataType === "" || dataType === "All"){
              return x;
            }else{
                return x.status === dataType;
            }
        });
        setnewData(newData);
    }, [datas, dataType]);
   
    
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentPost = newData.slice(indexOfFirstData, indexOfLastData)

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
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: `80%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="pending">pending: <span>20</span></div>
                        <div className="reconciled">Reconciled Order: <span>80</span></div>
                        <div className="total">Total Orders: <span>100</span></div>
                    </div>
                    <div className="order-box">
                        <div className="title">Payments</div>
                            <div className="progress">
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
                       <SimpleSelect datas={[5, 10, 15, 20]}  selected={selectedPageNumber} size="small"/>
                       <span>Out of {newData.length} payments</span>
                   </div>
                   <div className="searchbar-table">
                       <span><img src="assets/Search.svg" alt=""/></span>
                       <input type="text" className="search" name="search" 
                       placeholder="Search payments"/>
                   </div>

                   <div className="show-data-type">
                       <span>Show</span>
                       <SimpleSelect  selected={selectedPageNumber} size= "big" datas={["All", "Reconciled", "Un-Reconciled", "Settled", "Unsettled"]}/>
                   </div>
               </div>
            </div>

            <div className="table-main-content">
                <Table datas={currentPost} loading={loading}/>
            </div>

            <div className="table-footer-section">
                <div className="showing">
                    Showing {indexOfFirstData+1} to {dataPerPage+ indexOfFirstData} of {newData.length} entries
                </div>
                <div className="pagination">
                <Pagination
                    hideFirstLastPages
                    pageRangeDisplayed={2}
                    activePage={currentPage}
                    itemsCountPerPage={dataPerPage}
                    totalItemsCount={newData.length}
                    onChange={paginate}
                    prevPageText="Previous"
                    nextPageText="Next"
                    itemClass="page-item"
                    linkClass="page-link"
                    />
                </div>
            </div>
        </div>
    )
}

export default Main;
