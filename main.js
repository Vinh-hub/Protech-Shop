// functions
// function render(list) {
//     productList.innerHTML = '';
//     list.forEach(item => {
//         productList.appendChild(item);
//     });
// };
const productList = document.querySelector('.product-list');
var productLists = document.querySelectorAll('.product-list');
var inputElement = document.querySelector('.header_search-input');
var buttonElement = document.querySelector('.header_search-button');
let productItems = Array.from(productList.children);
const originalArr = [...productItems];
const itemProducts = document.querySelectorAll('.product-item__cate');
var pagination = document.querySelector('.pagination-list');
var nonepagination = document.querySelector('.none-pagination');


// Check 
// if (!productList || !inputElement || !buttonElement) {
//     console.error('Không tìm thấy các phần tử DOM cần thiết!');
//     throw new Error('DOM elements missing!');
// }

function render(list) {
    productList.innerHTML = '';

    if (list.length > 0) {
        list.forEach(item => {
            productList.appendChild(item); 
        });
    } else {
        productList.innerHTML ='<div class="no-product"><span class="no-product__text">Không tìm thấy sản phẩm</span></div>';

        nonepagination.style.display = 'none';
        pagination.style.display = 'none';;
    }
};

// function movePage(url) {
//     let targetUrl = `http://127.0.0.1:5500/${url}`;  
//     window.location.href = targetUrl;
// }

function movePage(url, query) {
    let targetUrl = `http://127.0.0.1:5500/${url}?query=${encodeURIComponent(query)}`;
    window.location.href = targetUrl;  
}

function compareStringsByPhrases(string1, string2, phraseLength = 1) {
    const words1 = string1.toLowerCase().split(/\s+/);
    const words2 = string2.toLowerCase().split(/\s+/);

    if (words1.length < phraseLength || words2.length < phraseLength) {
        return false; // Không đủ cụm từ để so sánh
    }

    const phrases1 = [];
    for (let i = 0; i <= words1.length - phraseLength; i++) {
        phrases1.push(words1.slice(i, i + phraseLength).join(' '));
    }

    return words2.some((_, i) => i <= words2.length - phraseLength &&
        phrases1.includes(words2.slice(i, i + phraseLength).join(' ')));
}

function search(query) {
    // const query = inputElement.value.trim();
    const filteredProducts = Array.from(itemProducts).filter(itemProduct => {
        const itemNameElement = itemProduct.querySelector('#item-name');
        const productName = itemNameElement ? itemNameElement.textContent.trim() : '';
        return compareStringsByPhrases(query, productName);
    });

    console.log('Kết quả tìm kiếm:', filteredProducts);
    render(filteredProducts); // Hiển thị kết quả tìm kiếm
}

// Handle search and redirect
// function handleSearchAndRedirect() {
//     // search(); 
//     // setTimeout(() => {
//     //     movePage('Template/Category/resultSearch.htm');  
//     // }, 200); 
// }

function handleSearchAndRedirect() {
    var query = inputElement.value.trim();
    if (query !== "") {
        movePage('Template/Category/resultSearch.htm', query);  
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.');
    }
}
// Lấy tham số từ URL khi trang kết quả được tải
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');  
    if (query) {
        search(query);  
    }
}

// Event listeners
inputElement.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { 
        if(inputElement.value.trim() !== ""){ 
            handleSearchAndRedirect();
        } else  {
            alert('Vui lòng nhập từ khóa tìm kiếm.'); 
        }
    } 
});

buttonElement.addEventListener('click', function() {
    if (inputElement.value.trim() !== "") {
        handleSearchAndRedirect();
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.'); 
        return;
    }
});


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

        
        if (itemProducts.length > 5){
            nonepagination.style.display = 'block';
            pagination.style.display = 'none';
        } 
        else{
            nonepagination.style.display = 'none';
            pagination.style.display = 'flex';
        }
//
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


const btnPrices = document.querySelectorAll('.select-price-item');
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
                const priceA = parseInt(a.querySelector('.price-current').getAttribute('data-price').replace('.', '') || 0);
                const priceB = parseInt(b.querySelector('.price-current').getAttribute('data-price').replace('.', '') || 0);

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
            productItems = [...originalArr]; 
        }
        render(productItems);
    });
});



// if (productLists !== null) {
//     console.log("Phần tử tồn tại.");
//     console.log(productLists);
// } else {
//     console.log("Phần tử không tồn tại.");
// }