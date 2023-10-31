function upvote(elementNumber) {
	if (elementNumber == 1) {
		document.querySelector("#likeId1").innerHTML++;
	}else if (elementNumber == 2){
        document.querySelector("#likeId2").innerHTML++;
    }else {
        document.querySelector("#likeId3").innerHTML++;
    }
}