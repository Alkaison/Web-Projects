const panels = document.querySelectorAll(".panel");

// remove "active" class from all 
function removeActivePanel()
{
    panels.forEach((panel) => {
        
        // remove active class from each panel card 
        panel.classList.remove("active");
    });
}

// check for "click" event, add "active" class 
panels.forEach((panel) => {

    // add event listener to each panel card 
    panel.addEventListener("click", () => {

        // remove all previous active panel 
        removeActivePanel();

        // add active class to the current clicked panel card 
        panel.classList.add("active");
    });
});
