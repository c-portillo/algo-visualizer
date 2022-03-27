
// generate a random array of elements representing a bars (each with values for height, color, and id)
export const getRandomValues = (size, color) => {
    const values = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    const result = []
    for (var i = 0; i < values.length; i++) {
        result.push({
            value: values[i],
            color: color,
            id: i
        })
    }

    return result;
}

export const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

// change color values at the indices listed in the 'indices' array
export const changeColors = (array, indices, color) => {
    for (const idx of indices) {
        array[idx].color = color;
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