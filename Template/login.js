document.getElementById("form-login").addEventListener("submit", function (event) {   
    event.preventDefault(); // Ngăn form tự động gửi đi    
  
    // Lấy giá trị từ input   
    const username = document.getElementById("username").value.trim();    
  
    if (username) {       
        // Kiểm tra nếu là tài khoản admin       
        if (username === "admin") {           
            // Lưu thông tin đăng nhập vào localStorage           
            localStorage.setItem("username", username);           
            // Hiển thị thông báo thành công           
            alert("Đăng nhập thành công với tài khoản Admin!");           
            // Chuyển hướng về trang quản trị admin.html           
            window.location.href = "dashboard.htm";       
        } else {           
            // Lưu thông tin đăng nhập tài khoản thường           
            localStorage.setItem("username", username);           
            // Hiển thị thông báo thành công           
            alert("Đăng nhập thành công!");           
            // Chuyển hướng về trang index.html           
            window.location.href = "index.htm";       
        }   
    } else {       
        alert("Vui lòng nhập tên tài khoản!");   
    }
  });