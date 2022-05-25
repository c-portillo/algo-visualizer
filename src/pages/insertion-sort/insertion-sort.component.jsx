import React from "react";
import { insertionSortSolver } from "../../utils";
import AlgoPage from "../../components/algo-page/algo-page.component";

function InsertionSort() {
    return (
        <AlgoPage algoName="Insertion Sort" solver={insertionSortSolver} />
    )
}

export default InsertionSort;














/*
import React, { Component, useState, useEffect } from "react";
import SortContainer from "../../components/sort-container/sort-container";

import { getRandomValues, delay, until, setColors, swap, setBorderColor } from "../../utils/shared";

import './insertion-sort.styles.scss'

class InsertionSort extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayValues: [],
            arrayLength: 12,
            delayValue: 50,
            defaultBarColor: '#1962E5',
            currBarColor: '#B8D0FC',
            compareBorderColor: '#EB3939',
            sortedColor: '#30E573',
            pause: true,
            started: false
        }
    }

    componentDidMount() {
        this.props.setPage("insertion-sort");
        if (!this.props.array) this.generateRandomArray();
        else {
            let length = this.props.array.length;
            this.setState({ arrayValues: this.props.array, arrayLength: length });
        }
    }

    async componentDidUpdate() {
        if (this.props.pause !== undefined && this.props.pause !== this.state.pause) {
            this.setState( { pause: this.props.pause } )
            if (!this.props.pause && !this.state.started) this.insertionSort();
        }
    }

    generateRandomArray = () => {
        let result = getRandomValues(this.state.arrayLength, this.state.defaultBarColor);
        this.setState({ arrayValues: result, started: false });
    }

    markCurrent = (array, index) => {
        return setColors(array, [index], this.state.currBarColor);
    }

    markCompared = (array, indices) => {
        return setBorderColor(array, indices, this.state.compareBorderColor);
    }

    markSorted = (array, indices) => {
        return setColors(array, indices, this.state.sortedColor);
    }

    insertionSort = async () => {
        this.setState( { pause: false, started: true });
        let newArray = this.state.arrayValues;

        for (let i = 1; i < newArray.length; i++) {
            let currentValue = newArray[i].value;
            let currentValueIndex = i;
            let j = i - 1;

            await until(_ => this.state.pause == false); // check if paused
            newArray = this.markCurrent(newArray, i);
            await this.setState({ arrayValues: newArray });
            await delay(this.state.delayValue)

            while (j >= 0) {
                // compare
                await until(_ => this.state.pause == false); // check if paused
                newArray = this.markCompared(newArray, [currentValueIndex, j]);
                await this.setState({ arrayValues: newArray });
                await delay(this.state.delayValue)

                // swap if out of order
                await until(_ => this.state.pause == false); // check if paused
                if (newArray[j].value > currentValue) {
                    newArray = swap(newArray, [j, currentValueIndex]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue)

                    // mark as sorted after swap and update indices
                    await until(_ => this.state.pause == false); // check if paused
                    newArray = this.markSorted(newArray, [currentValueIndex]);
                    newArray = (j === 0) ? this.markSorted(newArray, [j]) : this.markCurrent(newArray, [j]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue);
                    currentValueIndex = j;
                    j--;

                } else {
                    await until(_ => this.state.pause == false); // check if paused
                    newArray = this.markSorted(newArray, [currentValueIndex, j]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue);
                    break;
                }
            }
        }
        this.setState( { pause: true } )
    }

    render() {
        return (
            <div className="insertion-sort-container">
                <h1 className="title" style={{color: 'black'}}> Insertion Sort </h1>
                <SortContainer arrayValues={this.state.arrayValues} arrayLength={this.state.arrayLength} />

                <div className="keys">

                </div>

                <div className="controls">
                    <button onClick={this.generateRandomArray} style={{ margin: '20px' }}> Reset </button>
                    <button onClick={this.insertionSort} style={{ margin: '20px' }}> Sort </button>
                </div>
            </div>
        )
    }
}

export default InsertionSort;

*/