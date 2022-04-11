import React, { useEffect, useState, } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./algo-select.styles.scss"

function AlgoSelect({ currentPage }) {
    let [algo, setAlgo] = useState(currentPage);

    // console.log('algo: ', algo ? algo : "nothing");
    // console.log('current page: ', currentPage ? currentPage : "nothing");

    useEffect(() => {
        setAlgo(currentPage);
    }, [currentPage])

    const handleChange = (event) => {
        setAlgo(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Algo</InputLabel>
            <Select
            
                displayEmpty={false}
                labelId="demo-select-small"
                id="demo-select-small"
                value={algo}
                label='Algo'
                onChange={handleChange}
            >
                {/* <MenuItem className="menu-item" value=""> <em> Random </em> </MenuItem> */}

                <MenuItem className="menu-item" value={'merge-sort'}> <Link className="menu-algo" to="/merge-sort"> Merge Sort </Link> </MenuItem>
                <MenuItem className="menu-item" value={'bubble-sort'}> <Link className="menu-algo" to="/bubble-sort"> Bubble Sort </Link> </MenuItem>
                <MenuItem className="menu-item" value={'insertion-sort'}> <Link className="menu-algo" to="/insertion-sort"> Insertion Sort </Link> </MenuItem>
                <MenuItem className="menu-item" value={'selection-sort'}> <Link className="menu-algo" to="/selection-sort"> Selection Sort </Link> </MenuItem>
            </Select>
        </FormControl>
    );
}

export default AlgoSelect;