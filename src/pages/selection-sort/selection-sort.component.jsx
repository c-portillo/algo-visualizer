import React, { useEffect } from "react";
import { SelectionSortSolver } from "../../utils";
import AlgoPage from "../../components/algo-page/algo-page.component";

import './selection-sort.styles.scss'

const SelectionSort = ({ setPage }) => {
    useEffect(() => {
        setPage('selection-sort');
    }, [])

    return (
        <AlgoPage algoName="Selection Sort" solver={SelectionSortSolver} />
    )
}

export default SelectionSort;