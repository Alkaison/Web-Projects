const btn1 = document.querySelector(".calculateBtn1");
const btn2 = document.querySelector(".calculateBtn2");
const fahrenheitBox = document.querySelector("#fahrenheit");
const celsiusBox = document.querySelector("#celsius");

// To Fahrenheit 
btn1.addEventListener("click", () => {
    const celsius = Number.parseInt(celsiusBox.value);
    let fahrenheit = 0;

    if (celsius === '' || isNaN(celsius) || typeof celsius === 'undefined' || !Number.isInteger(Number(celsius)))
        celsiusBox.style.border = "2px solid red";
    else {
        celsiusBox.style.border = "2px solid gray";
        fahrenheit = (celsius * 1.8) + 32;
        fahrenheitBox.value = fahrenheit.toFixed(2) + "°F";
    }
});

// To Celsius 
btn2.addEventListener("click", () => {
    const fahrenheit = Number.parseInt(fahrenheitBox.value);
    let celsius = 0;

    if (fahrenheit === '' || isNaN(fahrenheit) || typeof fahrenheit === 'undefined' || !Number.isInteger(Number(fahrenheit)))
        fahrenheitBox.style.border = "2px solid red";
    else {
        fahrenheitBox.style.border = "2px solid gray";
        celsius = (fahrenheit - 32) / 1.8;
        celsiusBox.value = celsius.toFixed(2) + "°C";
    }
});
