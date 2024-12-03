// Bắt đầu bằng cách lấy tất cả các tab và phần nội dung tương ứng
const tabs = document.querySelectorAll('.tabs li');
const orderItems = document.querySelectorAll('.orders .order-item');

function toggleTab(index) {
    // Ẩn tất cả các mục đơn hàng
    orderItems.forEach(item => item.style.display = 'none');
    
    // Bỏ chọn tất cả các tab
    tabs.forEach(tab => tab.classList.remove('is-active'));

    // Hiển thị phần nội dung tương ứng với tab được chọn
    if (index === 0) { // Thông báo chung
        orderItems.forEach(item => item.style.display = 'block'); // Hiển thị tất cả
    } else if (index === 1) { // Thông báo khuyến mãi
        orderItems[2].style.display = 'block'; // Hiển thị HAVIT
    } else if (index === 2) { // Thông báo đơn hàng
        orderItems[0].style.display = 'block'; // Hiển thị iPhone
    } else if (index === 3) { // Thông báo đổi trả
        orderItems[1].style.display = 'block'; // Hiển thị ASUS
    }

    // Đánh dấu tab được chọn là 'active'
    tabs[index].classList.add('is-active');
}

// Thêm sự kiện nhấp chuột cho mỗi tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        toggleTab(index);
    });
});

// Khởi tạo: Hiển thị mục đầu tiên (thông báo chung) khi tải trang
const links = document.querySelectorAll('.category__item-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
    document.querySelectorAll('.order-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.01)';
        });
    
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });