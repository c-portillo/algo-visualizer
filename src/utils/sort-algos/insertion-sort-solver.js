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

export const insertionSortSolver = async ({ array, updateArray, done }) => {
    let terminate = false;

    function forceTerminate() {
        terminate = true;
    }
    async function sort() {
        let newArray = array;

        // mark first element as sorted
        markSorted(newArray, [0]);
        await updateArray(newArray);

        // loop through rest of the list
        for (let i = 1; i < array.length; i++) {
            if (terminate) return;
            let currentValue = newArray[i].value;
            let currentValueIndex = i;

            // mark selected bar
            markCurrent(newArray, i)
            await updateArray(newArray);

            // loop backwards through sorted section, compare current bar with each sorted bar, swap if out of order
            for (let j = i - 1; j >= 0; j--) {
                if (terminate) return;
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

        done();
    }

    sort();

}