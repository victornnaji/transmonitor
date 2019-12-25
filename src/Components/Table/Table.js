import React from 'react';
import "./Table.scss";

const Table = ({datas, loading}) => {
    return (
        <div className="table-container">
            {loading ? (<div>loading</div>): 
            <table>
            <thead>
                <tr>
                <th>Item Type</th>
                <th>Price</th>
                <th>Transaction No</th>
                <th>Time</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {datas.map(data => (
                     <tr>
                     <td data-column="Title">{data.title}</td>
                     <td data-column="Price">{data.price}</td>
                     <td data-column="Transaction No">{data.trans_no}</td>
                     <td data-column="time">{data.time}</td>
                     <td data-column="Status">{data.status}</td>
                     </tr>
                ))}
            </tbody>
         </table>
            }
        </div>
    )
}

export default Table;
