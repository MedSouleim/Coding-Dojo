// we need a loop since the assignment is repeating
// At 2 miles
// At 6 miles
// It will stop whene it reach 6 miles
// 2 miles
// miles
var speed = 5.5
for(var miles = 2; miles<=6;miles+=2){
    if(speed >= 5.5){
        console.log(miles + "miles have been crossed, congrats here is a candy !");
    }else{(console.log("no candy for you !"))}
}