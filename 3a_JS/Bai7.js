
var count = 3;

var index = 0;

function flipImage() {
    var img = document.getElementById("game").children[index];

    img.style.display = (img.style.display == "block") ? "none" : "block";

    document.getElementById("click").disabled = (index == count - 1);
}

function click() {
    index = (index + 1) % count;
    flipImage();
}
flipImage();