import React, { Component } from "react";
import SortContainer from "../../components/sort-container/sort-container";

import { getRandomValues, delay, changeColors, swap } from "../../utils/shared";

import './insertion-sort.styles.scss'

class InsertionSort extends Component {
    constructor() {
        super();

        this.state = {
            arrayValues: [],
            arrayLength: 12,
            delayValue: 400,
            barColor: '#2999ff',
            compareColor: '#F69884'
        }
    }

    componentDidMount() {
        this.generateRandomArray();
    }

    generateRandomArray = () => {
        const result = getRandomValues(this.state.arrayLength, this.state.barColor)
        this.setState({ arrayValues: result })
    }

    insertionSort = async () => {
        var newArray = this.state.arrayValues;

        for (let i = 1; i < newArray.length; i++) {
            let currentVal = newArray[i].value;
            let currentValIndex = i;
            let j = i - 1;

            while (j >= 0) {
                // compare and swap if necessary
                newArray = changeColors(newArray, [j, currentValIndex], this.state.compareColor);
                await this.setState({ arrayValues: newArray });
                await delay(this.state.delayValue)

                if (newArray[j].value > currentVal) {
                    newArray = swap(newArray, [j, currentValIndex]);
                    this.setState({ arrayValues: newArray });
                    await delay(this.state.delayValue);

                    newArray = await changeColors(newArray, [j, currentValIndex], this.state.barColor);
                    await this.setState({ arrayValues: newArray });
                    
                    currentValIndex = j
                    j = j - 1;
                } else {
                    newArray = changeColors(newArray, [j, currentValIndex], this.state.barColor);
                    await this.setState({ arrayValues: newArray });
                    break;
                }
            }
        }
    }

    render() {
        return (
            <div className="insertion-sort-container">
                <h1 className="title"> Insertion Sort </h1>
                <SortContainer arrayValues={this.state.arrayValues} />
                <button onClick={this.generateRandomArray} style={{margin: '20px'}}> Reset </button>
                <button onClick={this.insertionSort} style={{margin: '20px'}}> Sort </button>
            </div>
        )
    }
}

export default InsertionSort;