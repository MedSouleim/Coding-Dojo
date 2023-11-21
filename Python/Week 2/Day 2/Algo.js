/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 */

// function stringDedupe(str) {
//     var result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (result.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }


function stringDedupe(str) {
    var result = '';

    for (let i = 0; i < str.length; i++) {
        var element = str[i];
        if (str.lastIndexOf(element) === i) {
            result += element;
        }
    }

    return result;
}
console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));