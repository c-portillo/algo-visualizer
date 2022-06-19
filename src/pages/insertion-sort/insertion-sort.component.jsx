import React, { useEffect } from "react";
import { InsertionSortSolver } from "../../utils";
import AlgoPage from "../../components/algo-page/algo-page.component";

function InsertionSort({setPage}) {
    useEffect(() => {
        setPage("insertion-sort");
    }, [])
    
    return (
        <AlgoPage algoName="Insertion Sort" solver={InsertionSortSolver} />
    )
}

export default InsertionSort;