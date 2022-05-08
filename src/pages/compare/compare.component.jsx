import React, { useEffect } from "react";
import OutlinedCard from "./compare-card/compare-card.component";

import "./compare.styles.scss"

const CompareAlgos = ({ setPage }) => {
    useEffect(() => {
        setPage("compare");
    }, []);

    return (
        <div>
            <h1> Compare Page </h1>
            <OutlinedCard />
        </div>
    )
}

export default CompareAlgos;