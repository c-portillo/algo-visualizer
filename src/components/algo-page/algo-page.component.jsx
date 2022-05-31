import React from "react";
import { getRandomValues, delay, until } from "../../utils";
import SortContainer from "../sort-container/sort-container";

import './algo-page.styles.scss'


// slider imports
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack } from "@mui/material";

const speedLabels = ['Slow', 'Medium', 'Fast', 'Maximum Effort'];
const speedValues = [500, 200, 50, 0];

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
            arrayLength: 40,
            defaultBarColor: '#1962E5',
            delayValue: 100,
            pause: false,
            isSorting: false,
            isComplete: false,
            sorter: null,
            speed: 1
        }

        this.generateArray = this.generateArray.bind(this);
        this.sortComplete = this.sortComplete.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.setSpeed = this.setSpeed.bind(this);
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
        if (this.state.sorter) this.state.sorter.terminate();
        const newArray = getRandomValues(this.state.arrayLength, this.state.defaultBarColor);
        const sorter = new this.props.solver({ array: newArray, updateArray: this.updateArray, done: this.sortComplete })
        await this.setState({ arrayValues: newArray, isSorting: false, isComplete: false, pause: true, sorter: sorter });
    }

    async sortComplete() {
        await this.setState({ isComplete: true, isSorting: false });
    }

    async sort() {
        if (this.state.isSorting) {
            this.setState({ pause: !this.state.pause });
        } else {
            if (!this.state.isComplete) {
                this.state.sorter.sort()
                await this.setState({ isSorting: true, pause: false });
            }
        }
    }

    setSpeed(event) {
        let newSpeed = event.target.value;
        this.setState({ speed: newSpeed, delayValue: speedValues[newSpeed]})
    }


    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2> {this.props.algoName} </h2>
                    <SortContainer arrayValues={this.state.arrayValues} arrayLength={this.state.arrayLength} />
                    <Box sx={{ width: 200 }} style={{ margin: '0 auto' }}>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <div> Speed </div>
                            <Slider
                                onChange={this.setSpeed}
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
