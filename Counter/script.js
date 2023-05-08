function plus() 
{
    const text = document.getElementById("counter-text");
    let count = parseInt(document.getElementById("counter-text").innerText);

    count++;
    text.innerHTML = count;
}

function minus () 
{
    const text = document.getElementById("counter-text");
    let count = parseInt(document.getElementById("counter-text").innerText);

    count--;
    text.innerHTML = count;
}

function reset()
{
    const text = document.getElementById("counter-text");
    let count = parseInt(document.getElementById("counter-text").innerText);

    count = 100;
    text.innerHTML = count;
}
