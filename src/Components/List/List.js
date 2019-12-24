import React from 'react';
import "./List.scss";

const List = ({img, text}) => {
    return (
        <div className="list-container">
            <img src={img} alt=""/>
            <div className="text">{text}</div>
            <div className="overlay"></div>
        </div>
    )
}

export default List;
