
var nutXanh = document.getElementById("nutXanh");
var nutDo = document.getElementById("nutDo");

var mauNenHienTai = document.body.style.backgroundColor;
function doiMau(nut) {
    var mauNenMoi = nut.value;
    document.body.style.backgroundColor = mauNenMoi;
}
nutXanh.addEventListener("click", doiMau);
nutDo.addEventListener("click", doiMau);