//given a sorted array and a number, count the occurences of the number in the array
//use a helper functions similar to the findFirst() method in countZeros
function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    if(firstIdx == -1) {
        return firstIdx;
    }
    let lastIdx = findLast(arr, val);
    return (lastIdx - firstIdx) + 1;
}

//divide and conquer! a variation of countZeros that accommodates any value
function findFirst(arr, val, low = 0, high = arr.length - 1) {
    if(high >= low) {
        let middle = Math.floor((low + high) / 2);
        //using recursion, locate and return the first occurence
        if((middle === 0 || val > arr[middle - 1]) && arr[middle] === val) {
            return middle;
        } else if(val > arr[middle]) {
            return findFirst(arr, val, middle + 1, high)
        }
        return findFirst(arr, val, low, middle - 1)
    }
    return -1;
}

//an inverse of findFirst, locating and returning the last occurence of the number
function findLast(arr, val, low = 0, high = arr.length - 1) {
    if(high >= low) {
        let middle = Math.floor((low + high) / 2);

        if((middle === arr.length - 1 || val < arr[middle + 1]) && arr[middle] === val) {
            return middle;
        } else if(val < arr[middle]) {
            return findLast(arr, val, low, middle - 1)
        }
        return findLast(arr, val, middle + 1, high)
    }
    return -1;
}