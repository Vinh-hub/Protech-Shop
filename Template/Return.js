document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.styles__Tab-sc-b2w09e-2'); // Chọn tất cả các tab
    const orderItems = document.querySelectorAll('.order-item'); // Chọn tất cả các đơn hàng
    const emptyOrderMessage = document.querySelector('.styles__EmptyCpn-sc-1twarw-0'); // Thay đổi theo class thực tế của ảnh "Chưa có đơn hàng"

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active')); // Bỏ active khỏi tất cả các tab
            this.classList.add('active'); // Thêm active cho tab được chọn

            const selectedStatus = this.textContent.trim(); // Lấy trạng thái được chọn

            let hasOrders = false; // Biến để kiểm tra có đơn hay không

            orderItems.forEach(order => {
                const orderStatus = order.getAttribute('data-status'); // Lấy trạng thái của đơn hàng

                // So sánh với giá trị trạng thái tương ứng
                if (selectedStatus === "Tất cả" || 
                    (selectedStatus === "Đang tiến hành" && (orderStatus === "Chờ thanh toán" || orderStatus === "Đang xử lý")) || 
                    (selectedStatus === "Đã xong" && (orderStatus === "Đã giao"))) {
                    order.style.display = 'flex'; // Hiển thị đơn hàng nếu trạng thái phù hợp
                    hasOrders = true; // Nếu có đơn hàng, gán lại giá trị cho biến
                } else {
                    order.style.display = 'none'; // Ẩn đơn hàng nếu trạng thái không phù hợp
                }
            });

            // Kiểm tra nếu không có đơn hàng và không phải tab "Tất cả"
            if (!hasOrders && selectedStatus !== "Tất cả") {
                emptyOrderMessage.style.display = 'flex'; // Hiện ảnh "Chưa có đơn hàng"
            } else {
                emptyOrderMessage.style.display = 'none'; // Ẩn ảnh "Chưa có đơn hàng"
            }
        });
    });

    // Khởi tạo hiển thị cho tab đầu tiên
    tabs[0].click(); // Giả sử tab đầu tiên được chọn mặc định
});