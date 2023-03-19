var x="";
function a(id){
    return document.getElementById(id);
}
function hiban(num){
    x+=num;
    a('dapan').value=x;
}
function xoa(){
    x="";
    a("dapan").value=x;
}
function dapan1(){
    a('dapan').value=eval(a('dapan').value);
}