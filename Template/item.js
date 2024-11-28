
function handleAddToCart(button) {
    // Thay đổi nội dung nút "Thêm vào giỏ"
    button.textContent = "Đã thêm vào giỏ";
    button.disabled = true; // Vô hiệu hóa nút để tránh nhấn nhiều lần
    button.classList.add("disabled"); // Thêm class để thay đổi style nếu cần

    // Hiển thị thông báo
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}
// Hàm xử lý khi nhấn nút "Mua ngay"
function handleBuyNow() {
    const targetUrl = "http://127.0.0.1:5500/Protech-Shop/Template/Cart.htm"; 
    window.location.href = targetUrl; 
}


let cartCount = 0; // Khởi tạo số lượng sản phẩm trong giỏ
function handleAddToCart(button) {
    cartCount++; // Tăng số lượng sản phẩm trong giỏ
    document.getElementById("cart-count").textContent = cartCount; // Cập nhật số lượng trên giao diện
    alert("Sản phẩm đã được thêm vào giỏ hàng!"); // Thông báo người dùng
}