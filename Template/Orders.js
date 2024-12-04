// document.addEventListener('DOMContentLoaded', function() {
//     const tabs = document.querySelectorAll('.styles__Tab-sc-e27b7w-3');
//     const orderItems = document.querySelectorAll('.order-item');
//     const emptyOrderMessage = document.querySelector('.styles__EmptyCpn-sc-1twarw-0'); // Thay đổi theo class thực tế của ảnh "Chưa có đơn hàng" 

//     tabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             tabs.forEach(t => t.classList.remove('active'));
//             this.classList.add('active');

//             const selectedStatus = this.textContent.trim();

//             let hasOrders = false; // Biến để kiểm tra có đơn hay không

//             orderItems.forEach(order => {
//                 const orderStatus = order.getAttribute('data-status');

//                 if (selectedStatus === "Tất cả đơn" || orderStatus === selectedStatus) {
//                     order.style.display = 'flex';
//                     hasOrders = true; // Nếu có đơn hàng, gán lại giá trị cho biến
//                 } else {
//                     order.style.display = 'none';
//                 }
//             });

//             // Kiểm tra nếu chuyển đến tab "Đã hủy"
//             if (selectedStatus === "Đã hủy") {
//                 emptyOrderMessage.style.display = 'flex'; // Hiện ảnh "Chưa có đơn hàng"
                
//                 // Ẩn tất cả các đơn hàng
//                 orderItems.forEach(order => {
//                     order.style.display = 'none';
//                 });
//             } else {
//                 emptyOrderMessage.style.display = 'none'; // Ẩn ảnh "Chưa có đơn hàng"
//             }

//             // Nếu không có đơn hàng và không phải tab "Đã hủy", hiển thị ảnh "Chưa có đơn hàng" 
//             if (!hasOrders && selectedStatus !== "Đã hủy") {
//                 emptyOrderMessage.style.display = 'flex';
//             }
//         });
//     });

//     // Khởi tạo hiển thị cho tab đầu tiên
//     tabs[0].click(); // Giả sử tab đầu tiên được chọn mặc định
// });
// const links = document.querySelectorAll('.category__item-link');
//     links.forEach(link => {
//         if (link.href === window.location.href) {
//             link.classList.add('active');
//         }
//     });
// document.querySelectorAll('.order-item').forEach(item => {
//         item.addEventListener('mouseover', () => {
//             item.style.transform = 'scale(1.01)';
//         });
    
//         item.addEventListener('mouseout', () => {
//             item.style.transform = 'scale(1)';
//         });
//     });