const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// check for "click" event and toggle active class 
btn.addEventListener('click', () => {

    // add active class and focus the search box 
    search.classList.toggle('active');
    input.focus();
});
