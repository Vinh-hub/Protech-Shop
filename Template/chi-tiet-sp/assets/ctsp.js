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

// document.getElementById("add-product-btn").addEventListener("click", function (){

// });