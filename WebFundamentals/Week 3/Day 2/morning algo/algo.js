var arr2d = [
    [2,5,8],
    [3,6,1],
    [5,7,7],
]
function arrFlaten (arr2d){
    var newArr = [];
    for(var i = 0 ; i<arr2d.length ; i++){
        for(var j = 0 ; j<arr2d[i].length ; j++){
            newArr.push(arr2d[i][j]);
        }
    }
    return newArr;
}
console.log(arrFlaten(arr2d));

// *Input :
nums = [2,7,11,15], target = 9
// * Output
[0,1]

// Exemples :
// Input : nums = [3,2,4], target = 6
//Output : [1,2]

function twoNumberSum (array,targetSum){
    for(var i = 0 ; i <array.length ; i++){
        var firstNum = array[i];
        for(var j = i+1 ; j <array.length ; j++){
            var secondNumb = array[j];
            if(firstNum + secondNum === targetSum){
                return [ i , j ];
            }
        }
    }
}