

// from kiểm tra lỗi 
function validateForm() {
    // Lấy giá trị của các trường input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
  
    // Kiểm tra các trường input
    if (name == "") {
      alert("Mời Bạn Nhập Tên");
      return false;
    }
    if (email == "") {
      alert("Mời Bạn Nhập Email");
      return false;
    }
    if (password == "") {
      alert("Mời Bạn Nhập Password");
      return false;
    }
    if (phone == "") {
      alert("Mời bạn Nhạp Phone");
      return false;
    }
  
    // Kiểm tra độ dài của số điện thoại
    if (phone.length < 10 || phone.length > 11) {
      alert("Số Điện Thoại Phải Dài 10 Đến 11 Số");
      return false;
    }
  
    // Kiểm tra định dạng số điện thoại
    var phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(phone)) {
      alert("Số Điện Thoại Phải Là Số Điện Thoại Hợp Lệ");
      return false;
    }
  }
  $(document).ready(function () {
    $("#show-hide-pass").click(function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
});

// đồng hồ

