
// generate a random array of elements representing a bars (each with values for height, color, and id)
export const getRandomValues = (size, color) => {
    const values = Array.from({ length: size }, () => Math.floor(Math.random() * 97 + 1));
    const result = [];

    for (var i = 0; i < values.length; i++) {
        result.push({
            value: values[i],
            color: color,
            id: i,
            current: false,
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
        if (conditionFunction()) resolve();
        else setTimeout(_ => poll(resolve), 400);
    }
    return new Promise(poll);
}

export const setColors = (array, indices, color, border = true) => {
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
        throw new Error('in swap(array, indices), indices must be array of length 2');
    };
}