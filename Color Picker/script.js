const rangeBtns = document.querySelectorAll(".rangeBtn");
const colorDisplay = document.querySelector(".colorDisplay");
const copyBtn = document.querySelector("#colorCode");
const copyCodeBtn = document.querySelector("#copyBtn");
const body = document.querySelector("body");

// for storing the updated color codes 
let colorCode;

// look for the input changes in "range" buttons 
rangeBtns.forEach((rangeBtn) => {

    // add event listener to each element 
    rangeBtn.addEventListener("input", () => {
        updateColorDisplayed();
    });
});

// when clicked on the code, copy it to the user clipboard 
copyCodeBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode);
});

// update the colorCode and set it to display 
const updateColorDisplayed = () => {

    colorCode = "rgb(";
    colorCode += rangeBtns[0].value;
    colorCode += ", ";
    colorCode += rangeBtns[1].value;
    colorCode += ", ";
    colorCode += rangeBtns[2].value;
    colorCode += ")";

    copyBtn.textContent = colorCode;
    colorDisplay.style.backgroundColor = colorCode;
    body.style.backgroundColor = colorCode;
}

// call for first time check 
updateColorDisplayed();
