import React from "react";
import { Bar } from "../bar/bar.component";

import "./sort-container.styles.scss"

const SortContainer = ({ arrayValues, arrayLength }) => {
    let barWidth = Math.floor(100 / arrayLength);

    return (
        <div className="sort-container">
            {
                arrayValues.map((item, index) => (
                    <Bar
                        key={index}
                        value={item.value}
                        color={item.color}
                        current={item.current}
                        borderColor={item.borderColor}
                        barWidth={barWidth}
                    />
                ))
            }
        </div>
    )
}

export default SortContainer;