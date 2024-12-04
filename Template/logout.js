
// Khai báo các phần tử cần thiết
var accountButton = document.querySelector('.header_navbar-item-link');

console.log(accountButton);

// Biến theo dõi trạng thái đăng nhập
isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Lấy trạng thái từ localStorage

console.log(isLoggedIn);

// Hàm xử lý khi nhấn vào mục tài khoản
// accountButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
//     if (isLoggedIn) {
//         const currentPath = window.location.pathname;
//         const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
//         window.location.href = `${basePath}/Template/Information.htm`;
//         // Nếu đã đăng nhập, chuyển đến trang Information.htm   
//         // window.location.href = '../Template/Information.htm'; // Đường dẫn đến trang Information
//     } else{
//             // Nếu chưa đăng nhập, chuyển đến trang formNK.htm
//             const currentPath = window.location.pathname;
// const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// window.location.href = `${basePath}/Template/Category/formNK.htm`;
//             //window.location.href = '../Template/Category/formNK.htm'; // Đường dẫn đến trang đăng ký
//     }
// });


accountButton.addEventListener('click', function(event) { 
    event.preventDefault(); 
    // const basePath = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    // accountButton.addEventListener('click', function(event) { 
    //     event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a> 
    //     if (isLoggedIn) { 
    //         // Nếu đã đăng nhập, chuyển đến trang Information.htm 
    //         window.location.href = `${localStorage.getItem('basePath')}Template/Information.htm`; 
    //     } else { 
    //         // Nếu chưa đăng nhập, chuyển đến trang formNK.htm 
    //         window.location.href = `${localStorage.getItem('basePath')}Template/Category/formNK.htm`; 
    //     } 
    // });
            accountButton.addEventListener('click', function(event) { event.preventDefault(); 
                // Ngăn chặn hành vi mặc định của thẻ <a> 
                if (isLoggedIn) { 
                    // Nếu đã đăng nhập, chuyển đến trang Information.htm 
                    window.location.href = `${localStorage.getItem('basePath')}Template/Information.htm`; 
                } else { 
                    // Nếu chưa đăng nhập, chuyển đến trang formNK.htm 
                    window.location.href = `${localStorage.getItem('basePath')}Template/Category/formNK.htm`; 
                } 
            });
});
