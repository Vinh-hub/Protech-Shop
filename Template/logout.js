
   var logoutButton = document.querySelector('.logout_button');

    // const basePath = localStorage.getItem('basePath');
    // console.log(basePath);
    
   // Hàm xử lý khi nhấn vào nút đăng xuất
   logoutButton.addEventListener('click', function() {
        // Đặt lại trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'false'); // Đặt trạng thái thành chưa đăng nhập
        window.location.href = `../index.htm`; // Chuyển hướng về trang chính
    });

    document.addEventListener("DOMContentLoaded", () => {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
});
