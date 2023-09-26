function doiMau() {
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
        if (i % 2 == 0) {
            divs[i].style.backgroundColor = "red";
        } else {
            divs[i].style.backgroundColor = "blue";
        }
    }
}