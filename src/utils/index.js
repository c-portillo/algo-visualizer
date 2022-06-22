// generate a random array of elements representing a bars (each with values for height, color, and id)
export const getRandomValues = (size, color) => {
    const result = [];

    for (var i = 0; i < size; i++) {
        result.push({
            value: Math.floor(Math.random() * 97 + 1),
            color: color,
            id: i,
            borderColor: color
        })
    }

    return result;
}

export const setBorderColor = (array, indices, color) => {
    for (const idx of indices) {
        array[idx].borderColor = color;
    }
    return array;
}

export const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const until = (conditionFunction) => {
    const poll = resolve => {
        if (conditionFunction()) {
            resolve();
        } else {
            setTimeout(_ => poll(resolve), 0);
        }
    }
    return new Promise(poll);
}

export const setColors = (array, indices, color, border=true) => {
    for (const idx of indices) {
        array[idx].color = color;
        if (border) array[idx].borderColor = color;
    }
    return array;
}

// swap elements in the array. 'indices' must be an array of size 2
export const swap = (array, indices) => {
    if (indices.length === 2) {
        const temp = array[indices[0]];
        array[indices[0]] = array[indices[1]];
        array[indices[1]] = temp;
        return array
    } else {
        throw new Error('in swap(array, indices), indices must be array of 2 integers');
    };
}

// sorting logic
export { InsertionSortSolver }  from './sort-algos/insertion-sort-solver';
export { SelectionSortSolver } from './sort-algos/selection-sort-solver';
export { BubbleSortSolver }  from './sort-algos/bubble-sort-solver';
export { MergeSortSolver }  from './sort-algos/merge-sort-solver';