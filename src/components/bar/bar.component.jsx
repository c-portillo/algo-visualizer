import React from "react";

import "./bar.styles.scss"

export const Bar = ({value, color, current, borderColor, barWidth}) => (
    <div className="bar-container" style={{width: `${barWidth}%`}}>
        <div className='bar' style={{ height: `${value}%`, backgroundColor: `${current ? '#9EE2F7': color}`, borderColor: `${borderColor}`}} />
    </div>
)