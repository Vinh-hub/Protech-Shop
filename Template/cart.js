const products = [
    "Iphone 14 Pro Max",
    "Iphone 13",
    "AirPods Pro 2",
    "MacBook Pro M2",
    "Dell XPS 13",
    "Samsung Galaxy S23",
    "Sony WH-1000XM5",
    "Apple Watch Series 8",
    "Asus ROG Zephyrus G14",
    "HP Spectre x360"
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.header_search-input');
    const suggestionsBox = document.querySelector('.suggestions');
    const searchButton = document.querySelector('.header_search-button');
    const historyList = document.querySelector('.search-history');
    let searchHistory = [];

    // Hàm hiển thị gợi ý
    function showSuggestions(query) {
        const filteredProducts = products.filter(product => 
            product.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsBox.innerHTML = ""; // Xóa gợi ý cũ
        if (query && filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = product;
                suggestionItem.className = 'suggestion-item';
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = product;
                    suggestionsBox.innerHTML = ""; // Xóa gợi ý sau khi chọn
                });
                suggestionsBox.appendChild(suggestionItem);
            });
        }
    }

    // Hàm hiển thị lịch sử tìm kiếm
    function renderSearchHistory() {
        historyList.innerHTML = "";
        searchHistory.forEach(item => {
            const historyItem = document.createElement('li');
            historyItem.textContent = item;
            historyList.appendChild(historyItem);
        });
    }

    // Sự kiện nhập trong ô tìm kiếm
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        showSuggestions(query);
    });

    // Sự kiện nhấn nút tìm kiếm
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query && !searchHistory.includes(query)) {
            searchHistory.unshift(query);
            if (searchHistory.length > 5) searchHistory.pop(); // Giữ tối đa 5 mục
            renderSearchHistory();
        }
        searchInput.value = "";
        suggestionsBox.innerHTML = ""; // Xóa gợi ý sau khi tìm kiếm
    });

    // Tìm kiếm bằng phím Enter
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
