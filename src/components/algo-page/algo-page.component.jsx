import React from "react";
import { getRandomValues, delay } from "../../utils";
import SortContainer from "../sort-container/sort-container";

import './algo-page.styles.scss'

/*
1. Generate array           x
2. Render array             x 
3. Design sorting func      x
4. swap first and last      x
5. change solve to sort     x
6. change solver to sorter  x
7. implement ins sort             
*/

class AlgoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayValues: [],
            arrayLength: 12,
            defaultBarColor: '#1962E5',
            delayValue: 450
        }

        this.generateArray = this.generateArray.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.sort = this.sort.bind(this);
    }

    async updateArray(newArray) {
        await this.setState(newArray);
        await delay(this.state.delayValue);
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        const newArray = getRandomValues(this.state.arrayLength, this.state.defaultBarColor);
        this.setState({ arrayValues: newArray });
    }

    sort() {
        this.props.solver({ array: this.state.arrayValues, updateArray: this.updateArray }); // solver will take 3 arguments: array, updateArray(), done()
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2> {this.props.algoName} </h2>
                    <SortContainer arrayValues={this.state.arrayValues} arrayLength={this.state.arrayLength} />
                    <button onClick={this.sort}> Sort </button>
                    <button onClick={this.generateArray}> Reset </button>
                </div>
            </div>
        )
    }
}
export default AlgoPage;
