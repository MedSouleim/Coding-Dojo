// max , min , avg :
// Given an array with multiple values, write a function that returns a new array that only contains 
// the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var max=arr[0];
    var min=arr[0];
    var avg=0;
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }for(var i=0;i<=arr.length-1;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    var sum=0
    for(var i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }avg=sum/arr.length;
    var newarr = [max,min,avg];
    return newarr;
}
// Swap values:
// Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1])
function swap(arr){
    var firstPosition = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=firstPosition;
    return arr;
}
// Number to string :
// Write a function that takes an array of numbers and replaces any negative values 
// within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr){
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
// Negatives :
//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function noNeg(arr){
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }return arr;
}
// Squares :
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareVal(arr){
    for( var i=0;i<=arr.length-1;i++){
        arr[i]= arr[i]**2;
    }return arr;
}
// Greater than Y :
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function graeterY(arr,Y){
    var count=0;
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]>Y){
            count++;
        }
    }return count;
}
// Array odd :
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddNumbers(arr){
    var arr = [];
    for(var i=1;i<=50;i++){
        if(i%2!=0){
            arr.push(i);
        }
    }return arr;
}
// Find Average :
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr){
    var sum=0;
    for(var i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }var avg=sum/arr.length;
    return avg;
}
// Itrate an array
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
function iterArr(arr){
    var sum=0;
    for(var i=0;i<=arr.length-1;i++){
        sum=sum+arr[i];
    }return sum;
}
// Get even 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
function sumEvenNumb(){
    var sum=1;
    for(var i=1;i<=1000;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }return sum;
}
// Largest Value :
// Create a function that will return the largest value present in the array.
function largestValue(){
	var array = [9, 3, -3, -9, 11, -6, 5, 10, -9, 1];
	var largest = array[0];
	for(var i=0;i<=array.length-1;i++){
	    if(array[i]>largest){
	        largest=array[i]
	    }
	}
	return largest;
}

