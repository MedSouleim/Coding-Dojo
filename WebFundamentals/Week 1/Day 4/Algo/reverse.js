function reverse(genericArray){
    var newarr=[];
    for(var i=genericArray.length-1;i>=0;i--){
        newarr.push(genericArray[i]);
    }
    return newarr;
}
var f=reverse([11,22,33,44,55]);
console.log(f);
