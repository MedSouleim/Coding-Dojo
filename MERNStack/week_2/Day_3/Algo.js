//  Day_3

/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
const expected1 = 2;

/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

// Initialize variables to store the sums of the left and right diagonals.
// Loop through the square matrix rows:
// For each row index i:
// Add the value at squareMatrix[i][i] to the left sum (diagonal from top-left to bottom-right).
// Add the value at squareMatrix[length - 1 - i][i] to the right sum (diagonal from top-right to bottom-left).
// Return the absolute difference between the sums of the two diagonals.


function diagonalDifference(sqrMatrix) {
        const length = sqrMatrix.length;
        var left = 0;
        var right = 0;
        for (let i = 0; i < length; i++) {
            left += sqrMatrix[i][i];
            right += sqrMatrix[length - 1 - i][i]
        }
        return Math.abs(left - right);
    }
    console.log(diagonalDifference(squareMatrix1));
    console.log(diagonalDifference(squareMatrix2));