const resultText = document.querySelector("#result");
const submitBtn = document.querySelector("#submitBtn");
const refreshBtn = document.querySelector("#refreshBtn");

// Generate random number 
const guessingNumber = Math.floor((Math.random() * 10) + 1);
let guessTimes = 0;

// check the random number 
// console.log("Random Number: " + guessingNumber);

// Check the number guessed by User 
submitBtn.addEventListener("click", () => {

    let numInput = document.querySelector("#num").value;
    numInput = Number.parseInt(numInput);
    guessTimes++;

    // input validations 
    if (numInput === '' || isNaN(numInput) || typeof numInput === 'undefined' || !Number.isInteger(Number(numInput)) || numInput < 1 || numInput > 10)
        resultText.innerHTML = "Please enter a valid integer between 1 and 10.";
    else
    {
        if(numInput === guessingNumber)
        {
            // change buttons 
            submitBtn.style.display = "none";
            refreshBtn.style.display = "block";
            
            // disable input 
            document.getElementById("num").disabled = "true";
            document.getElementById("num").style.color = "#2c3e50";
            
            // display results 
            resultText.classList.add("active");
            resultText.innerHTML = `${numInput} is the correct number, you took ${guessTimes} guesses!`;
        }
        else
            resultText.innerHTML = `You guessed the wrong number: ${numInput}.`;
    }
});

// refresh the page to generate new random number 
refreshBtn.addEventListener("click", () => location.reload());
