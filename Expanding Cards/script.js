const panels = document.querySelectorAll(".panel");

// check for "click" event, add "active" class 
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActivePanel();
        panel.classList.add("active");
    });
});

// remove "active" class from all 
function removeActivePanel()
{
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
