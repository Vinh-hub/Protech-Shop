var signUpSection = document.getElementById('signUpSection');
var loginSection = document.getElementById('loginSection');
var btnSignUp = document.getElementById('showSignUp');
var btnLogin = document.getElementById('showLogin');
var returnpage = document.getElementById('btn--login');
var signUps = document.getElementById('btn--signup');
const textsign = document.getElementById('inp-namesign');
const textlogin = document.getElementById('inp-namelogin');

// Kiểm tra trạng thái đăng nhập khi tải trang
    let isLoggedIn = localStorage.getItem('isLoggedIn');

  

// function openModal(sectionToShow) {
//     if (sectionToShow === 'signUp') {
//         signUpSection.style.display = 'block';    
//         loginSection.style.display = 'none';
//     } else if (sectionToShow === 'login') {
//         signUpSection.style.display = 'none'; 
//         loginSection.style.display = 'block';
//     }
// }

// // Hiển thị modal đăng ký hoặc đăng nhập dựa vào nút nhấn
// btnSignUp.addEventListener('click', function() {
//     openModal('signUp');
// });
// btnLogin.addEventListener('click', function() {
//     openModal('login');
// });

// Xử lý khi nhấn nút đăng ký
signUps.addEventListener('click', function(){
    // Khi người dùng đăng ký thành công
    isLoggedIn = true; // Cập nhật trạng thái đăng nhập
    localStorage.setItem('isLoggedIn', 'true'); // Lưu vào localStorage
    signUpSection.style.display = 'none'; 
    loginSection.style.display = 'block';
    textlogin.value = textsign.value; // Chuyển giá trị từ ô đăng ký sang ô đăng nhập
});

// Xử lý khi nhấn nút quay về trang chủ
returnpage.addEventListener('click', function(){
    // Cập nhật trạng thái đăng nhập từ localStorage trước khi kiểm tra
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Chuyển đến trang index nếu chưa đăng nhập, và đến Information nếu đã đăng nhập
    if (isLoggedIn) {
        window.location.href = '../Information.htm'; // Chuyển đến trang Information khi đã đăng nhập
    } else {
        window.location.href = '../../index.htm'; // Quay về trang index nếu chưa đăng nhập
    }
});

// Chức năng đổi loại mật khẩu
function daoTT() {
    let mk = document.getElementById("mk");
    mk.type = (mk.type === "password") ? "text" : "password";
}