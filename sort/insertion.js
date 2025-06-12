function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];      // Element to be compared
        let j = i - 1;

        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;     // Insert key at the correct position
    }
    return arr
}

console.log(insertionSort([1,2,0,4,6,0,5,90,2]))