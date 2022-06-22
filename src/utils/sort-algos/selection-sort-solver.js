import { until, setColors, swap, setBorderColor } from "..";

const barColors = {
    default: '#1962E5',
    current: '#B8D0FC',
    compare: '#EB3939',
    sorted: '#30E573',
    minimum: '#f99553',
    compareBorderColor: '#F8857B'
}

function markMin(array, index) {
    setColors(array, [index], barColors.minimum)
}

function markDefault(array, index) {
    setColors(array, [index], barColors.default)
}

function markCurrent(array, index) {
    setColors(array, [index], barColors.current)
}

function markComparing(array, indices) {
    setBorderColor(array, indices, barColors.compareBorderColor)
}

function markSorted(array, index) {
    setColors(array, [index], barColors.sorted)
}

export class SelectionSortSolver {
    constructor({array, updateArray, done}) {
        this.array = array;
        this.updateArray = updateArray;
        this.done = done;
        this.forceTerminate = false;
    }

    terminate() {
        this.forceTerminate = true;
        console.log('terminating')
    }

    async sort() {
        let newArray = this.array;
        let updateArray = this.updateArray;

        for (let i = 0; i < newArray.length; i++) {
            if (this.forceTerminate) return;
            
            let [currentMinValue, currentMinIndex] = [newArray[i].value, i];
            markMin(newArray, currentMinIndex);
            await updateArray(newArray);

            for (let j = i; j < newArray.length; j++) {
                let currentValue = newArray[j].value;

                markComparing(newArray, [currentMinIndex, j])
                await updateArray(newArray);

                if (currentValue < currentMinValue) {
                    currentMinIndex === i ? markCurrent(newArray, currentMinIndex) : markDefault(newArray, currentMinIndex)
                    markMin(newArray, j);
                    await updateArray(newArray);

                    [currentMinValue, currentMinIndex] = [currentValue, j]
                } else {
                    markDefault(newArray, j)
                }

                if (j === newArray.length - 1) {
                    [newArray[i], newArray[currentMinIndex]] = [newArray[currentMinIndex], newArray[i]];
                    await updateArray(newArray);
                    markDefault(newArray, currentMinIndex)
                    markSorted(newArray, i)
                    await updateArray(newArray);
                }
            }
        }
        if (!this.forceTerminate) this.done();
    }
}