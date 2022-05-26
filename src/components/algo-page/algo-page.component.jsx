import React from "react";
import { getRandomValues, delay } from "../../utils";
import SortContainer from "../sort-container/sort-container";

import './algo-page.styles.scss'


// slider imports
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

/*
1. Add slider UI                            
2. connect slider with state values         
3. allow slider to update state values         
*/

class AlgoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayValues: [],
            arrayLength: 12,
            defaultBarColor: '#1962E5',
            delayValue: 50
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
                    <Box sx={{ width: 200 }} style={{margin: 'auto'}}>
                        <Slider
                            aria-label="Speed"
                            defaultValue={30}
                            // getAriaValueText={valuetext}
                            // valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={4}
                        />
                    </Box>
                    <button onClick={this.sort}> Sort </button>
                    <button onClick={this.generateArray}> Reset </button>
                </div>
            </div>
        )
    }
}
export default AlgoPage;
