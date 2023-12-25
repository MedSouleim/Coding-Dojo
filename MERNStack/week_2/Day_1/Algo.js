//Week_2 Day_1 :



var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 9, 10, 10, 10];
// [1,3,5,8,10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];
// [1,3,5]

[];
[1, 2, 2];
// [1,2]




// create a function that takes 2 sorted arrays 
// 

function mergeDedupe(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            if (arr1[i] !== merged[merged.length - 1] || merged.length === 0) {
                merged.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j] || j === arr2.length) {
            if (arr1[i] !== merged[merged.length - 1] || merged.length === 0) {
                merged.push(arr1[i]);
            }
            i++;
        } else {
            if (arr2[j] !== merged[merged.length - 1] || merged.length === 0) {
                merged.push(arr2[j]);
            }
            j++;
        }
    }

    return merged;
}

var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 9, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];


mergeDedupe(arr1, arr2);
mergeDedupe(arrA , arrB);
console.log(mergeDedupe(arrA , arrB)); // Output: [1, 3, 4, 5, 8, 10]
console.log(mergeDedupe(arr1 , arr2)); // Output: [1, 3, 5, 8, 9, 10]

