import React from "react";

import "./bar.styles.scss"

export const Bar = ({value, color}) => (
    <div className="bar-container">
        <div className="bar" style={{ height: `${value}%`, backgroundColor: `${color}`}} />
    </div>
)