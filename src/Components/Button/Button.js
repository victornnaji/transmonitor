import React from 'react';
import "./Button.scss";

const Button = ({fill, color, children, transform}) => {
    return (
        <div className="button-container" style={{color: `${color}`,
         backgroundColor: `${fill}`, textTransform:  `${transform}`}}>
            {children}
        </div>
    )
}

export default Button;
