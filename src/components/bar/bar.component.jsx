import React from "react";

import "./bar.styles.scss"

export const Bar = ({value, color}) => (
    <div className="bar">
        <div className="bar2" style={{ height: `${value}%`, backgroundColor: `${color}`}} />
    </div>
)