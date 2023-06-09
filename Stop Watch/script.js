const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const timeText = document.querySelector(".currentTime");

// initial variables (string) to print in formatted 
let hrs = "00", min = "00", sec = "00";
let interval = 0;

// start timer and disable start-button 
startBtn.addEventListener("click", () => {
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    startBtn.style.cursor = "not-allowed";
});

// stop timer and enable start-button 
pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.style.cursor = "pointer";
});

// stop timer, reset variables and enable start-button 
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    sec = "00";
    min = "00";
    hrs = "00";
    startBtn.disabled = false;
    startBtn.style.cursor = "pointer";
    timeText.textContent = `${hrs} : ${min} : ${sec}`;
});

// main function for time updation 
const updateTime = () => {

    sec++;

    // format single digit value to double digits (like: 0 to 00) 
    const formatZero = txt => {
        txt = (txt < 10) ? '0' + txt : txt;
        return txt;
    }

    if(sec > 59)
    {
        min++;
        sec = 0;
        min = formatZero(min);
    }

    if(min > 59)
    {
        hrs++;
        min = 0;
        min = formatZero(min);
        hrs = formatZero(hrs);
    }

    if(hrs > 23)
    {
        sec = 0;
        min = 0;
        hrs = 0;

        sec = formatZero(sec);
        min = formatZero(min);
        hrs = formatZero(hrs);
    }

    // format second and update the timer text 
    sec = formatZero(sec);
    timeText.textContent = `${hrs} : ${min} : ${sec}`;
}
