//given a sorted array of 1's and 0's (1's first, then 0's) return the number of 0's
function countZeros(arr) {
    //use findFirst function to locate the 0s in the array
    let firstZero = findFirst(arr);
    if(firstZero === -1) return 0;
    //return the number of zeros in the array by subtracting the number of firstZeros from
    //the array's length
    return arr.length - firstZero;
}

//divide and conquer! but making sure to count zeros that appear before the middleIdx
function findFirst(arr, leftIdx = 0, rightIdx = arr.length -1) {
    if(rightIdx >= leftIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        //here's where the magic happens, using recursion
        if((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
            return middleIdx;
        } else if(arr[middleIdx] === 1) {
            return findFirst(arr, middleIdx + 1, rightIdx)
        }
        return findFirst(arr, leftIdx, middleIdx - 1)
    }
    return -1;
}