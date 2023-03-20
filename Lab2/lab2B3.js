 let fullName = prompt("Nhập vào họ và tên của bạn:");
      let gender = prompt("Nhập vào giới tính của bạn (Nam hoặc Nữ):"); 

      let nameParts = fullName.split(" "); 
      let firstName = nameParts.pop(); 
      let lastName = nameParts.shift(); 
      let middleName = nameParts.join(" "); 

      if (gender.toLowerCase() === "nam") {
        middleName = "Văn"; 
      } else if (gender.toLowerCase() === "nữ") {
        middleName = "Vẽ"; 
      }

      let newFullName = lastName + " " + middleName + " " + firstName; 

      //in ra kết quả tên mới... in hoa cho nó rực rỡ
      console.log("Tên ban đầu : " + fullName.toUpperCase());
      console.log("Họ: " + lastName);
      console.log("Tên đệm: " + middleName);
      console.log("Tên: " + firstName);
      console.log("Tên mới: " + newFullName.toUpperCase());