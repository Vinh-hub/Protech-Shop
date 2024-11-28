// Search

// 
const btndts = document.querySelectorAll('.btn-custom');
btndts.forEach(btndt => {
    btndt.addEventListener('click', function () {
        if (btndt.classList.contains('btn--primary')) {
            btndt.classList.remove('btn--primary');
        } else {
            btndts.forEach(btn => btn.classList.remove('btn--primary'));
            btndt.classList.add('btn--primary');
        }
    });
});

const itemProducts = document.querySelectorAll('.product-item__cate');
        var pagination = document.querySelector('.pagination-list');
        var nonepagination = document.querySelector('.none-pagination');
        if (itemProducts.length > 5){
            nonepagination.style.display = 'block';
            pagination.style.display = 'none';
        } else{
            nonepagination.style.display = 'none';
            pagination.style.display = 'flex';
        }
        var imgList = document.querySelectorAll('img');
        var container = document.querySelector('.container');
        var btnList = document.querySelectorAll('button');
    
// 
const productList = document.querySelector('.product-list');
var arr = [];

document.querySelectorAll('.product-item__cate').forEach(itemproduct => {
    arr.push(itemproduct);
});     
btndts.forEach(btn => {
    btn.addEventListener('click', e => {
        let className = e.currentTarget.getAttribute('class');
        let filterData = arr.filter(food => {
            return Array.from(food.classList).some(cls => className.includes(cls));
        });
    const isPrimary = btn.classList.contains('btn--primary');
        if (isPrimary) {
           render(filterData); 
        } else {
            render(arr); 
        }
    });
});

function render(list) {
    productList.innerHTML = '';
    list.forEach(item => {
        productList.appendChild(item);
    });
}

const btnPrices = document.querySelectorAll('.select-price-item');

let productItems = Array.from(productList.children);
const originalArr = [...productItems]; 

btnPrices.forEach(btnPrice => {
    btnPrice.addEventListener('click', () => {
        if (btnPrice.classList.contains('active')) {
            btnPrice.classList.remove('active');
        } else {
            btnPrices.forEach(btn => btn.classList.remove('active'));
            btnPrice.classList.add('active');
        }
        // Kiểm tra nếu nút đã có class active
        if (btnPrice.classList.contains('active')) {
            productItems.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price-current').getAttribute('data-price').replace('.', ''));
                const priceB = parseInt(b.querySelector('.price-current').getAttribute('data-price').replace('.', ''));

                // Sắp xếp tăng dần
                if (btnPrice.classList.contains('asc')) {
                    return priceA - priceB;
                }
                // Sắp xếp giảm dần
                if (btnPrice.classList.contains('desc')) {
                    return priceB - priceA;
                }
            });
        } else {
            // Nếu không có class active, quay lại danh sách gốc
            productItems = [...originalArr]; // Quay lại danh sách ban đầu
        }

        // Hiển thị lại sản phẩm sau khi sắp xếp hoặc giữ nguyên
        render(productItems);
    });
});

        // if (itemProducts.length > 0) {
        //     console.log('Có ' + itemProducts.length + ' phần tử khớp với selector!');
        // } else {
        //     console.log('Không tìm thấy phần tử nào!');
        // }

     