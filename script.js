// Open GitHub on click over profile picture 
const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", () => {
    window.open("https://github.com/Alkaison");
});

// Open main page on click over pageTitle 
const nameTitle = document.getElementById("nameTitle");
nameTitle.addEventListener("click", () => {
    window.location.href = "https://alkaison.github.io/Web-Projects";
});
