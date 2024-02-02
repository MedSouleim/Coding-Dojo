function removeDiv() {
    var divToRemove = document.querySelector("#PopThat");
    divToRemove.remove();
}


function myclick(element) {
    if (element == "1") {
        alert("Loading weather report... for Burbank city");
    } else {
        if (element == 2) {
            alert("Loading weather report... for Chicago city");
        } else {
            if (element == 3) {
                alert("Loading weather report... for Dallas city");
            }
        }
    }
}

function uniteChange() {
    uniteToChoose = document.querySelector("#unite").value;
    for (var i = 0; i < isCel.length; i++) {
        var btnName = "#b" + (i + 1);
        var theBtn = document.querySelector(btnName);
        if (uniteToChoose == "°C") {
            theBtn.innerText = isCel[i];
        } else {
            theBtn.innerText = isFar[i];
        }
    }
}