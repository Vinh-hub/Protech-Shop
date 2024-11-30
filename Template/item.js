
// function handleAddToCart(button) {
   
//     button.textContent = "Đã thêm vào giỏ";
//     button.disabled = true; 
//     button.classList.add("disabled"); 

//     cartCount++; 
//     document.getElementById("cart-count").textContent = cartCount; 
//     alert("Sản phẩm đã được thêm vào giỏ hàng!"); 
//     return;
// }
// Hàm xử lý khi nhấn nút "Mua ngay"
function handleBuyNow() {
    const targetUrl = "http://127.0.0.1:5500/Template/Category/Info.htm"; 
    window.location.href = targetUrl; // Chuyển hướng
}

function movePage(url, query) {
    let targetUrl = `http://127.0.0.1:5500/${url}?query=${encodeURIComponent(query)}`;
    window.location.href = targetUrl;  
};


