// Search
const search = document.querySelector('.header_search-input');
const items = document.querySelectorAll('#item-name');

document.querySelector('.header_search-button').addEventListener("click", function () {
    const searchValue = search.value.toLowerCase();
    const filteredItems = Array.from(items).filter(item =>
        item.textContent.toLowerCase().includes(searchValue)
    );

    // Lưu kết quả vào localStorage
    const results = filteredItems.map(item => item.closest('.product-item').outerHTML);
    localStorage.setItem('searchResults', JSON.stringify(results));

    // Chuyển hướng sang trang kết quả
    window.location.href = './Template/Category/resultSearch.htm';
});



const productList = document.querySelector('.product-list__search');
const searchResults = JSON.parse(localStorage.getItem('searchResults'));

productList.innerHTML = '';

if (searchResults && searchResults.length > 0) {
    searchResults.forEach(productHTML => {
        productList.innerHTML += productHTML;
    });
} else {
    productList.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
}

localStorage.removeItem('searchResults');