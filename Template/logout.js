// Khai báo các phần tử cần thiết
var accountButton = document.querySelector('.header_navbar-item-link');
var logoutButton = document.querySelector('.logout_button');

// Biến theo dõi trạng thái đăng nhập
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Lấy trạng thái từ localStorage

// Hàm xử lý khi nhấn vào mục tài khoản
accountButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    
    if (isLoggedIn) {
        // Nếu đã đăng nhập, chuyển đến trang Information.htm
        window.location.href = '../Information.htm'; // Đường dẫn đến trang Information
    } else{
            // Nếu chưa đăng nhập, chuyển đến trang formNK.htm
            window.location.href = './Template/Category/formNK.htm'; // Đường dẫn đến trang đăng ký
    }
});
    
    // Hàm xử lý khi nhấn vào nút đăng xuất
    logoutButton.addEventListener('click', function() {
        // Đặt lại trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'false'); // Đặt trạng thái thành chưa đăng nhập
        window.location.href = '../../index.htm'; // Chuyển hướng về trang chính
    });