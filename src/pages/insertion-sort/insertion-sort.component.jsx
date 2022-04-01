import React, { Component } from "react";
import SortContainer from "../../components/sort-container/sort-container";

import { getRandomValues, delay, setColors, swap, setBorderColor } from "../../utils/shared";

import './insertion-sort.styles.scss'

class InsertionSort extends Component {
    constructor() {
        super();

        this.state = {
            arrayValues: [],
            arrayLength: 12,
            delayValue: 200,
            defaultBarColor: '#1962E5',
            currBarColor: '#B8D0FC',
            compareBorderColor: '#EB3939',
            sortedColor: '#30E573',
        }
    }

    componentDidMount() {
        this.generateRandomArray();
    }

    generateRandomArray = () => {
        let result = getRandomValues(this.state.arrayLength, this.state.defaultBarColor);
        this.setState({ arrayValues: result });
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
        let newArray = this.state.arrayValues;

        for (let i = 1; i < newArray.length; i++) {
            let currentValue = newArray[i].value;
            let currentValueIndex = i;
            let j = i - 1;

            newArray = this.markCurrent(newArray, i);
            await this.setState({ arrayValues: newArray });
            await delay(this.state.delayValue)

            while (j >= 0) {
                // compare
                newArray = this.markCompared(newArray, [currentValueIndex, j]);
                await this.setState({ arrayValues: newArray });
                await delay(this.state.delayValue)

                // swap if out of order
                if (newArray[j].value > currentValue) {
                    newArray = swap(newArray, [j, currentValueIndex]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue)

                    // mark as sorted after swap and update indices
                    newArray = this.markSorted(newArray, [currentValueIndex]);
                    newArray = (j === 0) ? this.markSorted(newArray, [j]) : this.markCurrent(newArray, [j]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue);
                    currentValueIndex = j;
                    j--;

                } else {
                    newArray = this.markSorted(newArray, [currentValueIndex, j]);
                    await this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue);
                    break;
                }
            }
        }
    }

    render() {
        return (
            <div className="insertion-sort-container">
                <h1 className="title"> Insertion Sort </h1>
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