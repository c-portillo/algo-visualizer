import React, { useEffect } from "react";
import AlgoPage from "../../components/algo-page/algo-page.component";
import { MergeSortSolver } from "../../utils";

import "./merge-sort.styles.scss"
 
const MergeSort = ({ setPage }) => {
    useEffect(() => {
        setPage('merge-sort');
    }, []);

    return (
        <AlgoPage algoName="Merge Sort" solver={MergeSortSolver} />
    )
}

export default MergeSort;