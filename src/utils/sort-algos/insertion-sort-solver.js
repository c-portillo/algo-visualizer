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

function markComparing(array, indices) {
    setBorderColor(array, indices, barColors.compareBorderColor)
}

function markSorted(array, indices) {
    setColors(array, indices, barColors.sorted)
}

export class InsertionSortSolver {
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

        // mark first element as sorted
        markSorted(newArray, [0]);
        await updateArray(newArray);

        // loop through rest of the list
        for (let i = 1; i < newArray.length; i++) {
            if (this.forceTerminate) return;

            let currentValue = newArray[i].value;
            let currentValueIndex = i;

            // mark selected bar
            markCurrent(newArray, i)
            await updateArray(newArray);

            // loop backwards through sorted section, compare current bar with each sorted bar, swap if out of order
            for (let j = i - 1; j >= 0; j--) {
                if (this.forceTerminate) return;
                markComparing(newArray, [currentValueIndex, j]);
                await updateArray(newArray);

                if (newArray[j].value > currentValue) {
                    swap(newArray, [j, currentValueIndex]);
                    markSorted(newArray, [currentValueIndex]);

                    if (j === 0) {
                        await updateArray(newArray);
                        markSorted(newArray, [j])
                    }

                    await updateArray(newArray);
                    currentValueIndex = j;

                } else {
                    markSorted(newArray, [j, currentValueIndex]);
                    await updateArray(newArray);
                    break;
                }
            }
        }
        if (!this.forceTerminate) this.done();
    }
}