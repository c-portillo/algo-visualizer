import React, { useEffect } from "react";
import { BubbleSortSolver } from "../../utils";
import AlgoPage from "../../components/algo-page/algo-page.component";
import "./bubble-sort.styles.scss";

function BubbleSort({setPage}) {
    useEffect(() => {
        setPage('bubble-sort')
    },[])
    
    return (
        <div style={{ textAlign: 'center' }}>
            <AlgoPage algoName="Bubble Sort" solver={BubbleSortSolver} />
        </div>)
}

export default BubbleSort;