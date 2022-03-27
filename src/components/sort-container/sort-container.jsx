import React from "react";
import { Bar } from "../bar/bar.component";

import "./sort-container.styles.scss"

const SortContainer = ({ arrayValues }) => (
    <div className="sort-container">
        {
            arrayValues.map((item, index) => (
                <Bar key={index} value={item.value} color={item.color}/>
            ))
        }
    </div>
)

export default SortContainer;