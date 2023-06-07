// Open main page on click over pageTitle 
const navTitle = document.querySelector(".navTitle");

navTitle.addEventListener("click", () => {
    window.location.href = "https://alkaison.github.io/Web-Projects";
});

const projectCardContainer = document.querySelector(".project-card");
const projectContainer = document.querySelector(".projects-container");

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

function getProjects()
{
    fetchData("./projects.json")
        .then(data => {

            data.projects.forEach(project => {
                const projectCard = projectCardContainer.cloneNode(true);

                const pName = projectCard.querySelector(".project-title");
                pName.textContent = project.name;

                const pLink = projectCard.querySelector("a");
                pLink.href = project.link;

                const pImage = projectCard.querySelector(".project-image");
                pImage.src = project.image;

                projectContainer.append(projectCard);

            });
        })
        .catch(error => console.log(`Additional information about error: ${error}`));
}

getProjects();
