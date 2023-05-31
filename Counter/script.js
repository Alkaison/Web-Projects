const text = document.querySelector("#counter-text");
const plusBtn = document.querySelector(".btn-plus");
const minusBtn = document.querySelector(".btn-minus");
const resetBtn = document.querySelector(".btn-reset");
let count = parseInt(document.getElementById("counter-text").textContent);

// increment the counter 
plusBtn.addEventListener("click", () => {
    count++;
    text.textContent = count;
});

// decrement the counter 
minusBtn.addEventListener("click", () => {
    count--;
    text.textContent = count;
});

// reset to initial value 
resetBtn.addEventListener("click", () => {
    count = 100;
    text.textContent = count;
});
