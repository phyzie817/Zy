
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var delta = b * b - 4 * a * c;
if (delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("ketQua").innerHTML = "x1 = " + x1 + ", x2 = " + x2;
} else if (delta == 0) {
    var x = -b / (2 * a);
    document.getElementById("ketQua").innerHTML = "x = " + x;
} else {
    document.getElementById("ketQua").innerHTML = "Phương trình vô nghiệm";
}