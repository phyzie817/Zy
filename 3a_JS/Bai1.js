function print_number() {
    var number = document.getElementById("number").value;
    number = parseInt(number);
    var html = '';
    for (var i = 1; i <= number; i++) {
        html += i + ' <br/>';
    }
    document.getElementById("result").innerHTML = html;
}
