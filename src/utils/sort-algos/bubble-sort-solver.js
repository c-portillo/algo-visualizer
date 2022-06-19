import { until, setColors, swap, setBorderColor } from ".."

const barColors = {
    default: '#1962E5',
    current: '#B8D0FC',
    compare: '#EB3939',
    sorted: '#30E573',
    compareBorderColor: '#EB3939'
}

function markCurrent(array, index) {
    setColors(array, [index], barColors.current)
}

function markDefault(array, index) {
    setColors(array, [index], barColors.default)
}

function markComparing(array, indices) {
    setBorderColor(array, indices, barColors.compareBorderColor)
}

function markSorted(array, indices) {
    setColors(array, indices, barColors.sorted)
}

export class BubbleSortSolver {
    constructor({ array, updateArray, done }) {
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
            // mark first element as max for this iteration
            let indexOfMax = 0;
            (i < this.array.length - 1) ? markCurrent(newArray, [0]) : markSorted(newArray, [0])

            await updateArray(newArray);
            
            for (let j = 1; j < newArray.length - i; j++) {
                // mark as comparing
                markComparing(newArray, [indexOfMax, j])
                await updateArray(newArray);

                // swap if out of order
                if (newArray[indexOfMax].value > newArray[j].value) {
                    [newArray[indexOfMax], newArray[j]] = [newArray[j], newArray[indexOfMax]];
                }

                indexOfMax = j;

                (j < newArray.length - i - 1) ? markCurrent(newArray, [j]) : markSorted(newArray, [j])
                markDefault(newArray, [j-1])
                await updateArray(newArray);
            }
        }
        if (!this.forceTerminate) this.done();
    }
}