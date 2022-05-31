import React from "react";
import { getRandomValues, delay, until } from "../../utils";
import SortContainer from "../sort-container/sort-container";

import './algo-page.styles.scss'


// slider imports
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack } from "@mui/material";

const speedLabels = ['Slow', 'Medium', 'Fast', 'Maximum Effort']

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
            delayValue: 30,
            pause: false,
            isSorting: false,
            isComplete: false
        }

        this.generateArray = this.generateArray.bind(this);
        this.sortComplete = this.sortComplete.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.sort = this.sort.bind(this);
    }

    async updateArray(newArray) {
        await until(_ => this.state.pause == false);
        await this.setState(newArray);
        await delay(this.state.delayValue);
    }

    componentDidMount() {
        this.generateArray();
    }

    async generateArray() {
        const newArray = getRandomValues(this.state.arrayLength, this.state.defaultBarColor);
        await this.setState({ arrayValues: newArray, isSorting: false, isComplete: false, pause: true });
    }

    async sortComplete() {
        await this.setState({ isComplete: true, isSorting: false });
    }

    async sort() {
        if (this.state.isSorting) {
            this.setState({ pause: !this.state.pause });
        } else {
            if (!this.state.isComplete) {
                this.props.solver({ array: this.state.arrayValues, updateArray: this.updateArray, done: this.sortComplete }); // solver will take 3 arguments: array, updateArray(), done()
                await this.setState({ isSorting: true, pause: false });
            }
            console.log('sorting!')
        }
    }


    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2> {this.props.algoName} </h2>
                    <SortContainer arrayValues={this.state.arrayValues} arrayLength={this.state.arrayLength} />
                    <Box sx={{ width: 200 }} style={{ margin: 'auto' }}>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <div> Speed </div>
                            <Slider
                                aria-label="Speed"
                                defaultValue={1}
                                step={1}
                                marks
                                valueLabelDisplay="auto"
                                valueLabelFormat={value => <div>{speedLabels[value]}</div>}
                                min={0}
                                max={3}
                            />
                        </Stack>
                    </Box>
                    <button onClick={this.sort}> {this.state.isSorting ? (this.state.pause ? 'Resume': 'Pause') : 'Sort' } </button>
                    <button onClick={this.generateArray}> Reset </button>
                </div>
            </div>
        )
    }
}

export default AlgoPage;
