
// function movePage(url, query) {
//     let targetUrl = `http://127.0.0.1:5500/${url}?query=${encodeURIComponent(query)}`;
//     window.location.href = targetUrl;  
// };

let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Xử lý đăng nhập
function handleLogin() {
    // Mô phỏng đăng nhập thành công
    localStorage.setItem('isLoggedIn', 'true');
    isLoggedIn = true; // Cập nhật trạng thái cục bộ
    alert("Đăng nhập thành công!");
    updateButtons();
}

// Xử lý đăng xuất
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    isLoggedIn = false; // Cập nhật trạng thái cục bộ
    alert("Bạn đã đăng xuất.");
    updateButtons();
}

// Xử lý thêm vào giỏ hàng
// function handleAddToCart() {
//     if (!isLoggedIn) {
//         alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
//         const targetUrl = "http://127.0.0.1:5500/Template/Category/formNK.htm"; 
//         window.location.href = targetUrl; // Chuyển hướng
//         return;
//     }
//     alert("Sản phẩm đã được thêm vào giỏ hàng.");
    
// }
// const basePath = localStorage.getItem('basePath');

// Xử lý mua ngay
function handleBuyNow() {
    if (!isLoggedIn) {
        alert("Vui lòng đăng nhập để mua sản phẩm.");
        window.location.href = `../../Category/formNK.htm`;
        // return;
    }
    if (isLoggedIn){
    alert("Đang chuyển đến trang thanh toán...");
    window.location.href = `../../Category/Info.htm`;
    }
}

// Hàm thêm sản phẩm vào giỏ
function handleAddToCart(button) {
    // Thay đổi nội dung nút "Thêm vào giỏ"
    button.textContent = "Đã thêm vào giỏ";
    button.disabled = true; 
    button.classList.add("disabled"); 

    // Hiển thị thông báo
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    localStorage.setItem("cartCount", cartCount);

    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

// Cập nhật trạng thái nút khi đăng nhập/đăng xuất
function updateButtons() {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const addToCartButton = document.getElementById('addToCartButton');
    const buyNowButton = document.getElementById('buyNowButton');

    // if (isLoggedIn) {
    //     loginButton.style.display = 'none'; // Ẩn nút Đăng nhập
    //     logoutButton.style.display = 'inline-block'; // Hiện nút Đăng xuất
    //     addToCartButton.disabled = false; // Mở khóa nút Thêm vào giỏ
    //     buyNowButton.disabled = false; // Mở khóa nút Mua ngay
    // } else {
    //     loginButton.style.display = 'inline-block'; // Hiện nút Đăng nhập
    //     logoutButton.style.display = 'none'; // Ẩn nút Đăng xuất
    //     addToCartButton.disabled = true; // Khóa nút Thêm vào giỏ
    //     buyNowButton.disabled = true; // Khóa nút Mua ngay
    // }
}

// Gọi hàm cập nhật trạng thái khi tải trang
window.onload = updateButtons;

