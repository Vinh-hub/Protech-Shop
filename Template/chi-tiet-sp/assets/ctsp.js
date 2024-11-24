const optionGBs = document.querySelectorAll('.options-GB-link');
const optionColors = document.querySelectorAll('.options-color-link');
let optionTextGB = document.getElementById('option-gb');
let optionTextGBAvai = document.getElementById('option-gb-avai');

optionGBs.forEach(optionGB => {
    optionGB.addEventListener('click', () => {
        optionGBs.forEach(btn => btn.classList.remove('active'));
        optionGB.classList.add('active');

        const gbValue = optionGB.textContent.trim();
        optionTextGB.textContent = gbValue; 

        const availableGB = parseInt(gbValue) - 15; 
        optionTextGBAvai.textContent = availableGB + " GB";
    }); 
});

optionColors.forEach(optionColor => {
    optionColor.addEventListener('click', ()=>{
        optionColors.forEach(btn => btn.classList.remove('active'));
        optionColor.classList.add('active');
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