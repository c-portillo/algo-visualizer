import React, { useEffect } from "react";

import "./merge-sort.styles.scss"
 
const MergeSort = ({ setPage }) => {
    useEffect(() => {
        setPage('merge-sort');
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Merge Sort Page </h1>
        </div>
    )
}

export default MergeSort;