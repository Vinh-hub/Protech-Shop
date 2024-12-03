document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử DOM
    var signUpSection = document.getElementById('signUpSection');
    var loginSection = document.getElementById('loginSection');
    var btnSignUp = document.getElementById('showSignUp');
    var btnLogin = document.getElementById('btn--login'); // Nút đăng nhập
    var returnpage = document.getElementById('btn--returnlog'); // Nút trở lại
    var signUps = document.getElementById('btn--signup');
    const textsign = document.getElementById('inp-namesign');
    const textlogin = document.getElementById('inp-namelogin');
    const passwordLogin = document.getElementById('mk'); // Mật khẩu đăng nhập
    const showLoginBtn = document.getElementById('showLogin'); // Nút chuyển sang trang đăng nhập

    // Kiểm tra trạng thái đăng nhập khi tải trang
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

    // Hàm mở modal đăng ký hoặc đăng nhập
    function openModal(sectionToShow) {
        if (sectionToShow === 'signUp') {
            signUpSection.style.display = 'block';    
            loginSection.style.display = 'none';
        } else if (sectionToShow === 'login') {
            signUpSection.style.display = 'none'; 
            loginSection.style.display = 'block';
        }
    }

    // Hiển thị modal đăng ký hoặc đăng nhập dựa vào nút nhấn
    btnSignUp.addEventListener('click', function() {
        openModal('signUp');
    });

    // Nút "Đăng nhập" (chuyển sang màn hình đăng nhập)
    showLoginBtn.addEventListener('click', function() {
        openModal('login'); // Mở trang đăng nhập
    });

    // Xử lý khi nhấn nút đăng ký
    signUps.addEventListener('click', function(){
        isLoggedIn = true; // Cập nhật trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'true'); // Lưu vào localStorage
        signUpSection.style.display = 'none'; 
        loginSection.style.display = 'block';
        textlogin.value = textsign.value; // Chuyển giá trị từ ô đăng ký sang ô đăng nhập
        alert("Đăng ký thành công!"); // Hiển thị thông báo đăng ký thành công
    });

    // Xử lý khi nhấn nút quay về trang trước
    returnpage.addEventListener('click', function() {
        // Nếu đang ở trang đăng ký, chuyển về trang đăng nhập
        if (signUpSection.style.display === 'block') {
            openModal('login');
        }
        // Nếu đang ở trang đăng nhập, chuyển về trang đăng ký
        else {
            openModal('signUp');
        }
    });

    // Xử lý khi nhấn nút đăng nhập
    btnLogin.addEventListener('click', function() {
        var username = textlogin.value; // Lấy tên đăng nhập
        var password = passwordLogin.value; // Lấy mật khẩu

        // Giả sử tất cả thông tin nhập vào là hợp lệ (bỏ qua kiểm tra)
        alert("Đăng nhập thành công!"); // Hiển thị thông báo đăng nhập thành công
        
        // Cập nhật trạng thái đăng nhập và lưu vào localStorage
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        
        // Chuyển đến trang thông tin sau khi đăng nhập thành công
        window.location.href = '../Information.htm'; 
    });
});


function daoTT() {
    let mk = document.getElementById("mk");
    mk.type = (mk.type === "password")? "text":"password";
  } ;