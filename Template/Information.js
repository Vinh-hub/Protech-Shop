document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".btn-submit");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit
        alert("Thông tin đã được lưu"); // Hiển thị thông báo
    });
});
const links = document.querySelectorAll('.category__item-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });