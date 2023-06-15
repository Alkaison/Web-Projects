const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    };

    // fetch api 
    const res = await fetch('https://icanhazdadjoke.com', config);

    // convert to JSON 
    const data = await res.json();

    // update JOKE message 
    jokeEl.innerHTML = data.joke;
}

// call the function on visit 
generateJoke();

// add eventListener for button click 
jokeBtn.addEventListener('click', generateJoke);
