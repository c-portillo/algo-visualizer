import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './home.styles.scss'

const Home = ({ setPage }) => {
    useEffect(() => {
        setPage("");
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Hello, World!</h1>
            <p />
            <p> I created this project to help me visualize and better understand core sorting algorithms. </p>
            <p> I hope it helps you too. Feel free to check out the project's github repo. </p>
            <p> Pick an algorithm below or from the top right. </p>
            <br />
            <div style={{textAlign: 'left', display: 'inline-block' , margin: 'auto'}}>
                <ul>
                    <li className="algo-item"> <Link className="algo-link" to="/merge-sort"> Merge Sort </Link> </li>
                    <li className="algo-item"> <Link className="algo-link" to="/bubble-sort"> Bubble Sort </Link> </li>
                    <li className="algo-item"> <Link className="algo-link" to="/insertion-sort"> Insertion Sort </Link> </li>
                    <li className="algo-item"> <Link className="algo-link" to="/selection-sort"> Selection Sort </Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;