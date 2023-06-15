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
    // for handloing errors 
    try {
        // fetch projects data and wait for the promise to resolve 
        const jsonData = await fetch(path);
    
        // if the jsonData rejected then throw error 
        if(!jsonData.ok)
            throw new Error(`HTTP error! Status: ${jsonData.status}`);
    
        // convert the promise to JSON 
        const data = await jsonData.json();

        // return the JSON formatted data 
        return data;
    }
    catch(error) {
        // throw error to show 
        throw error;
    }
}

// create and append projects cards on body 
function getProjects()
{
    // fetch data from JSON 
    fetchData("./projects.json")
        .then(data => {

            // for each data, create a project card 
            data.projects.forEach(project => {

                // clone the structure of first card 
                const projectCard = projectCardContainer.cloneNode(true);

                // set project title 
                const pName = projectCard.querySelector(".project-title");
                pName.textContent = project.name;

                // set project description limited to 110 characters 
                const pDescription = projectCard.querySelector(".project-description");
                const description = project.description;
                const limitedText = description.substring(0, 110) + (description.length > 110 ? '...' : '');
                pDescription.textContent =  limitedText;

                // set project url to visit 
                const pLink = projectCard.querySelector("a");
                pLink.href = project.link;

                // set project image path 
                const pImage = projectCard.querySelector(".project-image");
                pImage.src = project.image;

                // set project difficulty 
                const pLevel = projectCard.querySelector(".project-difficulty");
                pLevel.textContent = project.level;

                // lastly add the project card to the project-container 
                projectContainer.append(projectCard);
            });
        })
        .catch(error => console.log(`Additional information about error: ${error}`));
}

// call for listing the projects 
getProjects();

// return the list of projects matching the userInput 
const getFilterProjects = () => {

    // get value in searchBar 
    const userInput = searchBar.value.trim().toLowerCase();
    let hiddenProjectsCount = 0;

    // get all projects from project-container 
    const projectCardArray = Array.from(projectContainer.querySelectorAll(".project-card"));

    // modify the property of project-card 
    projectCardArray.forEach((project) => {
        
        // get project title 
        const projectTitle = project.querySelector(".project-title").textContent;
        
        // if the project title matches the pattern of searchBar input value
        // display it otherwise hide the project card 
        if(!projectTitle.toLowerCase().startsWith(userInput))
        {
            project.classList.add("hide");
            hiddenProjectsCount++;
        }
        else
            project.classList.remove("hide");
    });

    // Show the message when all projects are hidden 
    // current max projects are 12 in total 
    if (hiddenProjectsCount === projectCardArray.length)
        noProjectMessage.style.display = "flex";
    else
        noProjectMessage.style.display = "none";
}

// filter the projects as per search string 
searchBar.addEventListener("input", getFilterProjects);
