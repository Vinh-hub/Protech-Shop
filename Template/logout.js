
// Khai báo các phần tử cần thiết
var accountButton = document.querySelector('.header_navbar-item-link');

console.log(accountButton);

// Biến theo dõi trạng thái đăng nhập
isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Lấy trạng thái từ localStorage

console.log(isLoggedIn);


// Hàm xử lý khi nhấn vào mục tài khoản
accountButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    
    if (isLoggedIn) {
        // Nếu đã đăng nhập, chuyển đến trang Information.htm
        window.location.href = 'http://127.0.0.1:5500/Template/Information.htm'; // Đường dẫn đến trang Information
    } else{
            // Nếu chưa đăng nhập, chuyển đến trang formNK.htm
            window.location.href = 'http://127.0.0.1:5500/Template/Category/formNK.htm'; // Đường dẫn đến trang đăng ký
    }
});
