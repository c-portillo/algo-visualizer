import { delay, until, setColors, swap, setBorderColor } from ".."

const barColors = {
    default: '#1962E5',
    curr: '#B8D0FC',
    compare: '#EB3939',
    sorted: '#30E573',
}

export const insertionSortSolver = async ( { array, updateArray } ) => {
    let idx1 = 0;
    let idx2 = array.length - 1;
    let newArray = array;

    // color first and last red
    newArray = setColors(newArray, [idx1, idx2], barColors.compare)
    await updateArray(newArray);
    
    // swap first and last
    newArray = swap(newArray, [idx1, idx2]);
    await updateArray(newArray);

    // reset to default color
    newArray = setColors(newArray, [idx1, idx2], barColors.default)
    await updateArray(newArray);

}
