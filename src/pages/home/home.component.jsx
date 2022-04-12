import React, { useEffect } from "react";

import './home.styles.scss'

const Home = ({ setPage }) => {
    useEffect(() => {
        setPage("");
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Hello, World!</h1>
            <p />
            <p> I created this project to help me visualize and better understand core algorithms. </p>
            <p> I hope it helps you too. Feel free to check out the project's github repo. </p>
            <p> Pick an algorithm below or from the menu on the top right. </p>
            <br />
            <div style={{textAlign: 'left', display: 'inline-block' , margin: 'auto'}}>
                <ul>
                    <li> Merge Sort </li>
                    <li> Bubble Sort </li>
                    <li> Insertion Sort </li>
                    <li> Selection Sort </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;