const navTitle = document.querySelector(".navTitle");
const searchBar = document.querySelector("#searchProjects");
const noProjectMessage = document.querySelector(".noProjectsMessage");
const projectCardContainer = document.querySelector(".project-card");
const projectContainer = document.querySelector(".projects-container");

// Open main page on click over pageTitle 
navTitle.addEventListener("click", () => {
    window.location.href = "https://alkaison.github.io/Web-Projects";
});

// fetch data from projects.json 
async function fetchData(path)
{
    try {
        const jsonData = await fetch(path);
    
        if(!jsonData.ok)
            throw new Error(`HTTP error! Status: ${jsonData.status}`);
    
        const data = await jsonData.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}

// create and append projects cards on body 
function getProjects()
{
    fetchData("./projects.json")
        .then(data => {

            data.projects.forEach(project => {
                const projectCard = projectCardContainer.cloneNode(true);

                const pName = projectCard.querySelector(".project-title");
                pName.textContent = project.name;

                const pDescription = projectCard.querySelector(".project-description");
                const description = project.description;
                const limitedText = description.substring(0, 110) + (description.length > 110 ? '...' : '');
                pDescription.textContent =  limitedText;

                const pLink = projectCard.querySelector("a");
                pLink.href = project.link;

                const pImage = projectCard.querySelector(".project-image");
                pImage.src = project.image;

                const pLevel = projectCard.querySelector(".project-difficulty");
                pLevel.textContent = project.level;

                projectContainer.append(projectCard);
            });
        })
        .catch(error => console.log(`Additional information about error: ${error}`));


}

// call for listing the projects 
getProjects();

// return the list of projects matching the userInput 
const getFilterProjects = () => {

    const userInput = searchBar.value.trim().toLowerCase();  // get value in searchBar
    let hiddenProjectsCount = 0;

    // get all projects from project-container 
    const projectCardArray = Array.from(projectContainer.querySelectorAll(".project-card"));

    // modify the property of project-card 
    projectCardArray.forEach((project) => {
        const projectTitle = project.querySelector(".project-title").textContent;
        
        if(!projectTitle.toLowerCase().startsWith(userInput))
        {
            project.classList.add("hide");
            hiddenProjectsCount++;
        }
        else
            project.classList.remove("hide");
    });

    // Show the message when all projects are hidden 
    if (hiddenProjectsCount === projectCardArray.length)
        noProjectMessage.style.display = "flex";
    else
        noProjectMessage.style.display = "none";
}

// filter the projects as per search string 
searchBar.addEventListener("input", getFilterProjects);
