const PANEL = document.querySelectorAll(".panel");

PANEL.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActivePanel();
        panel.classList.add("active");
    });
});

function removeActivePanel()
{
    PANEL.forEach((panel) => {
        panel.classList.remove("active");
    });
}
