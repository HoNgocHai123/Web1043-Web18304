 let fullName = prompt("Nhập vào họ và tên của bạn:"); // nhập tên
      let gender = prompt("Nhập vào giới tính của bạn (Nam hoặc Nữ):"); // nhập giới tính

      let nameParts = fullName.split(" "); // tách cả họ tên thành những phần riêng dựa trên khoảng trắng
      let firstName = nameParts.pop(); // lấy phần tử cuối cùng  của chuỗi đã tách ở trên
      let lastName = nameParts.shift(); // lấy phần tử đầu tiên ...
      let middleName = nameParts.join(" "); // ghép các phần tử không được lấy thành tên đệm

      if (gender.toLowerCase() === "nam") {
        middleName = "Văn"; // kiểm tra xem giới tính nhập vào có phải là nam không nếu phải thì đổi tên đệm thành văn
      } else if (gender.toLowerCase() === "nữ") {
        middleName = "Vẽ"; // kiểm tra xem nếu là nữ thì ... đổi họ đệm thành nữ
      }

      let newFullName = lastName + " " + middleName + " " + firstName; // cho ra một tên hoàn chỉnh sau khi chỉnh sửa

      //in ra kết quả tên mới... in hoa cho nó rực rỡ
      console.log("Tên ban đầu : " + fullName.toUpperCase());
      console.log("Họ: " + lastName);
      console.log("Tên đệm: " + middleName);
      console.log("Tên: " + firstName);
      console.log("Tên mới: " + newFullName.toUpperCase());