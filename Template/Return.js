document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.styles__Tab-sc-b2w09e-2'); // Chọn tất cả các tab
    const orderItems = document.querySelectorAll('.order-item'); // Chọn tất cả các đơn hàng
    const emptyOrderMessage = document.querySelector('.styles__EmptyCpn-sc-1twarw-0'); // Thay đổi theo class thực tế của ảnh "Chưa có đơn hàng" 

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Xóa lớp active khỏi tất cả các tab
            tabs.forEach(t => t.classList.remove('active'));
            // Thêm lớp active cho tab được chọn
            this.classList.add('active');

            const selectedStatus = this.textContent.trim(); // Lấy trạng thái được chọn
            let hasOrders = false; // Biến để kiểm tra có đơn hay không

            orderItems.forEach(order => {
                const orderStatus = order.getAttribute('data-status'); // Lấy trạng thái đơn hàng

                if (selectedStatus === "Tất cả" || orderStatus === selectedStatus) {
                    order.style.display = 'flex'; // Hiện đơn hàng
                    hasOrders = true; // Nếu có đơn hàng, gán lại giá trị cho biến
                } else {
                    order.style.display = 'none'; // Ẩn đơn hàng
                }
            });

            // Kiểm tra nếu không có đơn hàng tương ứng với trạng thái đã chọn
            if (!hasOrders) {
                emptyOrderMessage.style.display = 'flex'; // Hiện ảnh "Chưa có đơn hàng"
            } else {
                emptyOrderMessage.style.display = 'none'; // Ẩn ảnh "Chưa có đơn hàng"
            }
        });
    });

    // Khởi tạo hiển thị cho tab đầu tiên
    tabs[0].click(); // Giả sử tab đầu tiên được chọn mặc định
});
