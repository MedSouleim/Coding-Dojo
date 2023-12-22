//  Day_5


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [2, 3, 9, 5, 1, 6];
const expectedArr1 = [1, 2, 3, 5, 6, 9];


// 1

function insertionSort(nums) {
    for (let i = 1 ; i < nums.length ; i++) {
        let temp = nums[i] ;
        let j ;
        for (j = i - 1 ; j >= 0 && nums[j] > temp ; j--) {
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = temp
    }
    return nums ;
}
console.log(insertionSort(arr1));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));
console.log(insertionSort(numsOrdered));
console.log(insertionSort(expected));

2


function insertionSort(nums) {
    for (let i = 1 ; i < nums.length ; i++){
        const current = nums[i] ;
        let leftIndex = i-1 ;
        while (leftIndex >= 0 && current < nums[leftIndex]){
            nums[leftIndex + 1 ] = nums[leftIndex] ; 
            leftIndex -- ;
        }
        nums[leftIndex + 1] = current ;
    }
    return nums ;
}
console.log(insertionSort(arr1));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));
console.log(insertionSort(numsOrdered));
console.log(insertionSort(expected));