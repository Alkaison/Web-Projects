const accordians = document.querySelectorAll(".accordian");

// iterate over each accoridan FAQ and look for "click" event 
accordians.forEach((accordian) => {
    const icon = accordian.querySelector(".icon");
    const answer = accordian.querySelector(".answer");

    accordian.addEventListener("click", () => {
        // if contains active class, remove and change its height ... else add active class and adjust height 
        if(icon.classList.contains("active")) {
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        }
        else {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
