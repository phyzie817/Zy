
var count = 3;

var index = 0;

function showImage() {
    var img = document.getElementById("slide").children[index];

    img.style.display = "block";
    document.getElementById("next").disabled = (index == count - 1);
    document.getElementById("prev").disabled = (index == 0);
}

function next() {
    index = (index + 1) % count;
    showImage();
}
function prev() {
    index = (index - 1 + count) % count;
    showImage();
}
showImage();