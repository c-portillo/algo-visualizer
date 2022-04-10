import React, { useEffect } from "react";

import './selection-sort.styles.scss'

const SelectionSort = ({ setPage }) => {
    useEffect(() => {
        setPage('selection-sort');
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Selection Sort Page </h1>
        </div>
    )
}

export default SelectionSort;