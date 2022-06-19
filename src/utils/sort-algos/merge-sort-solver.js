import { until, setColors, swap, setBorderColor } from ".."

/*
Sort
- MargeSort()


MergeSort(start=0, end=array.length)
- If length of array == 1: do nothing

- Halve input array

- Run Merge Sort on each half
    - Figure out mid point: Math.floor(array.length / 2)
    - left = MergeSort(start = start, end = end)

- Merge sorted halves


*/

const barColors = {
    default: '#1962E5',
    current: '#B8D0FC',
    compare: '#EB3939',
    sorted: '#30E573',
    compareBorderColor: '#EB3939'
}

function markCurrent(array, indices) {
    setColors(array, indices, barColors.current)
}

function markComparing(array, indices) {
    setBorderColor(array, indices, barColors.compareBorderColor)
}

function markSorted(array, indices) {
    setColors(array, indices, barColors.sorted)
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

    mergeSort(array=this.array, startIndex = 0, endIndex = this.arrayLength - 1) {
        return new Promise(async (resolve, reject) => {
            if (startIndex === endIndex) {
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
            await this.mergeSort(newArray, leftStart, leftEnd);
            await this.mergeSort(newArray, rightStart, rightEnd);

            // merge sorted halves
            while (leftStart <= leftEnd && rightStart <= rightEnd) {
                markCurrent(newArray, [leftStart, rightStart])
                markComparing(newArray, [leftStart, rightStart])
                await updateArray(newArray);

                let [leftVal, rightVal] = [newArray[leftStart].value, newArray[rightStart].value];

                if (leftVal <= rightVal) {
                    // markSorted(newArray, [leftStart]);
                    markCurrent(newArray, [leftStart, rightStart])
                    await updateArray(newArray);

                    leftStart++;
                } else {
                    let rightElement = newArray[rightStart];
                    for (let i = leftEnd; i >= leftStart; i--) {
                        newArray[i+1] = newArray[i];
                    }
                    newArray[leftStart] = rightElement;
                    markCurrent(newArray, [leftStart, leftStart+1])
                    await updateArray(newArray);

                    leftStart++;
                    leftEnd++;
                    rightStart++
                }
            }

            resolve();
        })
    }

    async sort() {
        await this.mergeSort();
        if (!this.forceTerminate) this.done();
    }
}