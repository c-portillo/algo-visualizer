import React from "react";

function CompareAlgos() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1> Coming Soon </h1>
        </div>
    )
}

export default CompareAlgos;


/*
import React, { useState, useEffect, useRef } from "react";
import OutlinedCard from "./compare-card/compare-card.component";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InsertionSort from "../insertion-sort/insertion-sort.component";
import { getRandomValues } from "../../utils";
import { cloneDeep, truncate } from "lodash";

import "./compare.styles.scss"

function getAlgos(algos, setPage, array, pause) {
    return (
        algos.map((algo, idx) => {
            return (
                <Grid key={idx} item xs={6}>
                    <InsertionSort setPage={setPage} array={cloneDeep(array)} pause={pause} />
                </Grid>
            )
        })
    )
};

const CompareAlgos = ({ setPage }) => {
    let [array, setArray] = useState(getRandomValues(20, '#1962E5'));
    let [count, setCount] = useState(0);
    let [algos, setAlgos] = useState([]);
    let [pause, setPause] = useState(true) // test
    let isFirstRun = useRef(true);

    useEffect(() => {
        setPage('compare');
    }, []);

    useEffect(() => {
    }, [algos]);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAlgos(algos.concat(count));
    }, [count]);

    function increaseCount() {
        setCount(count + 1);
    }

    function playPause() {
        setPause(!pause);
    }

    return (
        <div>
            <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                <h1> {count} </h1>
                <button onClick={increaseCount}> + 1</button>
                <button onClick={playPause}> Toggle </button>
            </div>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 1 }}>
                    {getAlgos(algos, setPage, array, pause)}
                </Grid>
            </Box>
        </div>
    )
}

export default CompareAlgos;

*/
