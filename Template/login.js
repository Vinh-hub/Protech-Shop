const users = [
    { username: "user", password: "123456" },
    { username: "admin", password: "admin123" }
];

// Lấy tham số từ URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Kiểm tra đăng nhập
function checkLogin() {
    const username = getQueryParam('username');
    const password = getQueryParam('password');

    if (username && password) {
        // Kiểm tra thông tin đăng nhập với dữ liệu người dùng
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // Đăng nhập thành công
            alert("Đăng nhập thành công!");
            // Chuyển hướng tới trang khác sau khi đăng nhập
            window.location.href = "http://127.0.0.1:5500/dashboard.html";
        } else {
            // Đăng nhập thất bại
            alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
        }
    } else {
        alert("Vui lòng cung cấp tên đăng nhập và mật khẩu.");
    }
}

// Khi trang được tải xong
window.onload = function() {
    checkLogin();  
}