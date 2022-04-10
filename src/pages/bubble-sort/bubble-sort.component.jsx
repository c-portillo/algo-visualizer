import React, { useEffect } from "react";

import "./bubble-sort.styles.scss";

const BubbleSort = ({ setPage }) => {
    useEffect(() => {
        setPage('bubble-sort')
    },[])
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Bubble Sort Page </h1>
        </div>)
}

export default BubbleSort;