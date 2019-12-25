import React from 'react';
import "./Table.scss";

const Table = () => {
    return (
        <div className="table-container">
            {/* <div className="table-header">
                <div className="table-header-item">Item Type</div>
                <div className="table-header-item">Price</div>
                <div className="table-header-item">Transaction No</div>
                <div className="table-header-item">Time</div>
                <div className="table-header-item">Status   </div>
            </div>
            <div className="table-body">haha</div> */}

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
                <tr>
                <td data-column="First Name">James madison ibitshgshjdihsjshdj</td>
                <td data-column="Last Name">Matman</td>
                <td data-column="Job Title">Chief Sandwich</td>
                <td data-column="Twitter">@james</td>
                <td data-column="Twitter">a very big paragraph</td>
                </tr>
                <tr>
                <td data-column="First Name">Andor</td>
                <td data-column="Last Name">Nagy</td>
                <td data-column="Job Title">Designer</td>
                <td data-column="Twitter">@andornagy</td>
                <td data-column="Twitter">@andornagy</td>
                </tr>
            </tbody>
         </table>
        </div>
    )
}

export default Table;
