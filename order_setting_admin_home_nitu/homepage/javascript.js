let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food1.png')";
})

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food.jpg')";
})

document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search'),
          searchBtn = document.getElementById('search-btn'),
          searchClose = document.getElementById('search-close');
  
    /* Search show */
    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search');
    });
  
    /* Search hidden */
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search');
    });
});
