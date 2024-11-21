// Search
const search = document.querySelector('.header_search-input');
const items = document.querySelectorAll('#item-name');
const products = document.querySelectorAll('.product-item')

const itemValues = Array.from(items).map(item => item.textContent);

document.querySelector('.header_search-button').addEventListener("click", function(){
    window.location.href = './Template/resultSearch.htm';
});

document.querySelector('.header_search-button').addEventListener("click", function() {
    const searchValue = search.value.toLowerCase();

    const resultSearch = itemValues.filter(itemValue =>
        itemValue.toLowerCase().includes(searchValue)
    );

    console.log("Kết quả tìm kiếm:", resultSearch);
});
