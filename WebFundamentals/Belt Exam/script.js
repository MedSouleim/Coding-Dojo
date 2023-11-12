function upvote(elementNumber) {
    if (elementNumber == 1) {
        document.querySelector("#sp2").innerHTML++;
    }else{
        document.querySelector("#sp1").innerHTML++;
    }
}
function removeButton(buttonCntrl) {            
    buttonCntrl.remove();
}
function alertMe(){
    var message = 'The ninjas have won'
    alert(message)
}
setTimeout(alertMe,13000)