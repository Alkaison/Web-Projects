const genBtn = document.querySelector("#genBtn");
const inputField = document.querySelector("#passwordInput");
const copyClipboard = document.querySelector("#svgClipboard");
const passwordLengthText = document.querySelector("#passLengthText");
const passwordLengthInput = document.querySelector("#passLengthInput");

// check boxes variables 
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

// generate random password 
const generatePassword = () => {
    
    let genPassword = '';
    const length = passwordLengthInput.value;

    // which checkBoxes are checked by user and return array of allowedFunctions 
    const allowedFunctions = checkBoxes();
    
    // if all boxes are unchecked 
    if (allowedFunctions.length === 0) {
        alert("Please select at least one option.");
        return;
    }

    // generate random characters in loop 
    for (let i = 0; i < length; i++) {
        const randomFunctionIndex = Math.floor(Math.random() * allowedFunctions.length);
        const randomFunction = allowedFunctions[randomFunctionIndex];
        genPassword += randomFunction();
    }

    inputField.value = genPassword;
}

// first time password generation 
generatePassword();

// update password length on range input change 
passwordLengthInput.addEventListener("input", () => {
    passwordLengthText.textContent = passwordLengthInput.value;
});

// generate new password on button click 
genBtn.addEventListener("click",generatePassword);

// copy the password to clipboard 
copyClipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(inputField.value);
    alert("Password copied to clipboard.");
});

// returns lowercase characters 
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// returns uppercase characters 
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// returns random number between 0 to 9 
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// returns random symbol 
function getRandomSymbol() {
    const symbolLetter = '~`!#$%^&*()-_+|?.,<>"{}=/';
	return symbolLetter[Math.floor(Math.random() * symbolLetter.length)];
}

// check which boxes are checked and return an array of allowedFunctions 
function checkBoxes() {

    const allowedFunctions = [];

    // if boxes are checked push the function names to the array 
    if(uppercase.checked) {
        allowedFunctions.push(getRandomUpper);
    }

    if(lowercase.checked) {
        allowedFunctions.push(getRandomLower);
    }

    if(numbers.checked) {
        allowedFunctions.push(getRandomNumber);
    }

    if(symbols.checked) {
        allowedFunctions.push(getRandomSymbol);
    }

    return allowedFunctions;
}
