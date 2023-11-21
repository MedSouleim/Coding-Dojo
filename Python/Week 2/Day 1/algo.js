/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/
//                       v
const arr1 = ["a", "a", "a"];
const expected1 = {
	a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
	a: 2,
	b: 1,
	c: 3,
	Bob: 1,
	d: 1,
};

const arr3 = [];
const expected3 = {};

// pseudocode here
// *1) Create an empty object
//*2) Loop through the array
//? a) Check if the element at the specific index exists in the object
//! 		if doesn't exist -> Add it to the object as a key with value of 1
//*			if it exists -> increment the value
//* 3) Return the object
// create the function and decide what params it needs and what it will return
function makeFrequencyTable(arr) {
	var freqTable = {};
	for (var elem of arr) {
		if (!freqTable.hasOwnProperty(elem)) {
			freqTable[elem] = 1;
		} else {
			freqTable[elem] += 1;
		}
	}
	return freqTable;
}

// module.exports = makeFrequencyTable;

// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

//                               V
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

// pseudocode here

// create the function and decide what params it needs and what it will return
function oddOccurenyArray(arr) {
	var freqTable = {};
	for (var elem of arr) {
		if (!freqTable.hasOwnProperty(elem)) {
			freqTable[elem] = 1;
		} else {
			freqTable[elem] += 1;
		}
	}
	for (var key in freqTable) {
		if (freqTable[key] % 2 !== 0) {
			return parseInt(key);
		}
	}
}