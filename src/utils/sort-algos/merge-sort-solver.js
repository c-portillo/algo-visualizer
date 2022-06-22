import { until, setColors, swap, setBorderColor } from ".."

const barColors = {
    default: '#1962E5',
    current: '#B8D0FC',
    compare: '#EB3939',
    sorted: '#30E573',
    semiSorted: 'RGBA(46,229,114,0.4)',
    compareBorderColor: '#EB3939'
}

function markCurrent(array, indices) {
    setColors(array, indices, barColors.current)
}

function markComparing(array, indices) {
    setBorderColor(array, indices, barColors.compareBorderColor)
}

function markSorted(array, indices, finalSort=true) {
    const sortedColor = finalSort ? barColors.sorted : barColors.semiSorted;
    setColors(array, indices, sortedColor)
}

export class MergeSortSolver {
    constructor({ array, updateArray, done }) {
        this.array = array;
        this.arrayLength = this.array.length
        this.updateArray = updateArray;
        this.done = done;
        this.forceTerminate = false;
    }

    terminate() {
        this.forceTerminate = true;
        // console.log('terminating')
    }

    mergeSort(array=this.array, startIndex = 0, endIndex = this.arrayLength - 1, firstCall=true) {
        return new Promise(async (resolve, reject) => {
            if (startIndex === endIndex || this.forceTerminate) {
                resolve();
                return;
            }

            let newArray = array
            let updateArray = this.updateArray;

            // split array in 2 halves
            let mid = Math.floor((endIndex + startIndex) / 2);
            let [leftStart, leftEnd] = [startIndex, mid];
            let [rightStart, rightEnd] = [mid + 1, endIndex];

            // run merge sort on both halves
            await this.mergeSort(newArray, leftStart, leftEnd, false);
            await this.mergeSort(newArray, rightStart, rightEnd, false);

            // merge sorted halves
            while (leftStart <= leftEnd && rightStart <= rightEnd) {
                if (this.forceTerminate) {
                    resolve();
                    return;
                }
                markCurrent(newArray, [leftStart, rightStart])
                markComparing(newArray, [leftStart, rightStart])
                await updateArray(newArray);

                let [leftVal, rightVal] = [newArray[leftStart].value, newArray[rightStart].value];

                if (leftVal <= rightVal) {
                    // markSorted(newArray, [leftStart]);
                    markCurrent(newArray, [leftStart, rightStart])
                    markSorted(newArray, [leftStart], firstCall)
                    await updateArray(newArray);

                    leftStart++;
                } else {
                    let rightElement = newArray[rightStart];
                    for (let i = leftEnd; i >= leftStart; i--) {
                        newArray[i+1] = newArray[i];
                    }
                    newArray[leftStart] = rightElement;
                    markCurrent(newArray, [leftStart, leftStart+1])
                    markSorted(newArray, [leftStart], firstCall)
                    await updateArray(newArray);

                    leftStart++;
                    leftEnd++;
                    rightStart++
                }
            }
            let rest = []
            for (let i = Math.min(leftStart, rightStart); i <= endIndex; i++) {
                rest.push(i)
            }

            markSorted(newArray, rest, firstCall)
            await updateArray(newArray);

            resolve();
        })
    }

    async sort() {
        await this.mergeSort();
        if (!this.forceTerminate) this.done();
    }
}