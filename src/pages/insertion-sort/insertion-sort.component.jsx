import React, { Component } from "react";
import SortContainer from "../../components/sort-container/sort-container";

import { getRandomValues, delay, changeColors, swap } from "../../utils/shared";

import './insertion-sort.styles.scss'

class InsertionSort extends Component {
    constructor() {
        super();

        this.state = {
            arrayValues: [],
            arrayLength: 10,
            delayValue: 350,
            barColor: '#2999ff'
        }
    }

    componentDidMount() {
        this.generateRandomArray();
    }

    generateRandomArray = () => {
        const result = getRandomValues(this.state.arrayLength, this.state.barColor)
        this.setState({arrayValues: result})
    }

    insertionSort = async () => {
        const array = this.state.arrayValues;
        console.log(array);

        // change colors
        var newArray = changeColors(array, [0, 1], '#F69884');
        this.setState({arrayValues: newArray});
        await delay(this.state.delayValue)

        // swap
        newArray = swap(newArray, [0, 1])
        this.setState({arrayValues: newArray});
        await delay(this.state.delayValue)

        newArray = changeColors(array, [0, 1], this.state.barColor);
        this.setState({arrayValues: newArray});
    }

    render() {
        return (
            <div className="insertion-sort-container">
                <h1 className="title"> Insertion Sort </h1>
                <SortContainer arrayValues={this.state.arrayValues}/>
                <button onClick={this.generateRandomArray}> Generate Random </button>
                <button onClick={this.insertionSort}> Swap </button>
            </div>
        )
    }
}

export default InsertionSort;