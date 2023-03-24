var x="";
function a(id){   //Hàm a(id): Hàm này sẽ trả về phần tử DOM có ID tương ứng với tham số truyền vào. Ví dụ, nếu truyền vào id là "dapan", hàm sẽ trả về phần tử có id là "dapan".
    return document.getElementById(id);//document.getElementById() là một hàm được sử dụng để lấy phần tử HTML trên trang web bằng cách sử dụng ID của phần tử đó
}
function hiban(num){
    x+=num;//x = x + num
    a('dapan').value=x;//thể được hiểu là gán giá trị "x" vào thuộc tính "value" của một đối tượng HTML có định danh là "dapan".
}                        //.value" là một thuộc tính của đối tượng "a", cho phép truy cập và thay đổi giá trị của thuộc tính đó.
function xoa(){
    x="";                    //Truy cập đến phần tử HTML có định danh là "dapan", sau đó gán giá trị x vào thuộc tính "value" của phần tử đó.
    a("dapan").value=x;      //Tức là khi hàm "xoa" được gọi, nội dung trong ô nhập liệu có định danh là "dapan" sẽ bị xóa.
}
function dapan1(){
    a('dapan').value=eval(a('dapan').value); //thực hiện phép tính và gán cho value
}   

//Thuộc tính "value" là một thuộc tính của các phần tử HTML, dùng để lưu trữ hoặc truy xuất giá trị của phần tử đó. 