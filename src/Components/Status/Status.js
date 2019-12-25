import React from 'react';
import "./Status.scss";

const Status = ({children}) => {
    let styleColor = "";

    
    switch(children){
        case "Reconciled":
            styleColor = "#27AE60";
            break;
        case "Pending":
            styleColor = "#EBC315";
            break;
        case "Un-Reconciled":
            styleColor = "#7F8FA4";
            break;
        case "Settled":
            styleColor = "blue";
            break
        default :
             styleColor = "red"; 
    }

    return (
        <div className="status-holder" style={{color : `${styleColor}`}}>
            <div className="ball" style={{backgroundColor: `${styleColor}`}}></div>
             {children}
        </div>
    )
}

export default Status;
