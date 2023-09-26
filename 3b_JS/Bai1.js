
var date = new Date();

var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();
function updateClock() {
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    setTimeout(updateClock, 1000);
}
updateClock();