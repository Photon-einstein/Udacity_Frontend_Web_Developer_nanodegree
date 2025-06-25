// Construct the file path using Node.js's path module
// __dirname refers to the directory of the currently executing script (scripts.js)
// Then we navigate up one level, into 'data', and then to the JSON file.
const aboutMeDataFileLocation = 'data/aboutMeData.json';
const projectsDataFileLocation = 'data/projectsData.json';

let aboutMeDataContainer = null
let projectsDataContainer = null

async function loadAboutMeDataFile() {
    try {
        // Use fs.promises.readFile for an async/await approach
        const response = await fetch(aboutMeDataFileLocation); // Browser's fetch
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        aboutMeDataContainer = await response.json(); // .json() for fetch API
        console.log("'aboutMeData.json' file content loaded into global variable: ", aboutMeDataContainer);
    }
    catch(error) {
        console.error("Failed to load file 'aboutMeData.json' in browser:", error);
        aboutMeDataContainer = {}; // Fallback for error
    }
}

async function loadProjectsDataFile() {
    try {
        // Use fs.promises.readFile for an async/await approach
        const response = await fetch(projectsDataFileLocation); // Browser's fetch
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        projectsDataContainer = await response.json(); // .json() for fetch API
        console.log("'projectsData.json' file content loaded into global variable: ", projectsDataContainer);
    }
    catch(error) {
        console.error("Failed to load file 'projectsData.json' in browser:", error);
        projectsDataContainer = {}; // Fallback for error
    }
}

async function initialization() {
    try {
        // Use Promise.all to wait for both files to load concurrently
        await Promise.all([
            loadAboutMeDataFile(),
            loadProjectsDataFile()
        ]);
        console.log("All data files loaded successfully. Ready to build UI.");
        await buildAboutMeDiv();
        await buildProjectListDiv();
        await setupProjectNavigation();
    }
    catch(error) {
        console.error("Failed in the initialization phase: ", error);
    }
}
const buildAboutMeDiv = async() => {
    if (!aboutMeDataContainer || Object.keys(aboutMeDataContainer).length === 0) {
        console.error("Error: 'aboutMeDataContainer' is not loaded or is empty.");
        return; // Exit if data is not available
    }
    const aboutMeDiv = document.querySelector("#aboutMe");
    if(!aboutMeDiv) {
        console.error("Error: Element with ID '#aboutMe' not found in the DOM.");
        return;
    }
    // create and populate a new paragraph
    const bioParagraph = document.createElement('p');
    bioParagraph.textContent = aboutMeDataContainer.aboutMe || "About me information not available.";
    // create a new div for a picture
    const pictureDiv = document.createElement('div')
    pictureDiv.classList.add('headshotContainer')
    // create and populate a new image
    const imgAboutMeDiv = document.createElement('img');
    const defaultHeadshotImage = '../images/default_headshot.webp';
    imgAboutMeDiv.src = aboutMeDataContainer.headshot || defaultHeadshotImage;
    imgAboutMeDiv.alt = "profilePic"
    pictureDiv.append(imgAboutMeDiv)
    // create document fragment
    const documentFragment = document.createDocumentFragment()
    documentFragment.append(bioParagraph)
    documentFragment.append(pictureDiv)
    // add new document fragment to the already existing section div
    aboutMeDiv.append(documentFragment)
    console.log("'aboutMe' section built successfully.");
}

const buildProjectListDiv = async() => {
    if (!projectsDataContainer || Object.keys(projectsDataContainer).length === 0) {
        console.error("Error: 'projectsDataContainer' is not loaded or is empty.");
        return; // Exit if data is not available
    }
    const projectListDiv = document.querySelector("#projectList");
    if(!projectListDiv) {
        console.error("Error: Element with ID '#projectList' not found in the DOM.");
        return;
    }
    // create document fragment
    const documentFragment = document.createDocumentFragment();
    const defaultBackgroundCardImage = '../images/default_card.webp';
    // loop through the data
    projectsDataContainer.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectCard');
        // project_id
        if(project.project_id) {
            projectDiv.id = project.project_id;
        } else {
            console.warn(`Project missing 'project_id', cannot set ID for project: ${project.project_name || 'Unnamed Project'}`);
        }
        // project_name
        const projectNameDiv = document.createElement('h4');
        if(project.project_name) {
            projectNameDiv.textContent = project.project_name;
        } else {
            console.warn(`Project missing 'project_name', cannot set name for project: ${project.project_id || 'Unidentified Project'}`);
        }
        // project short_description
        const projectShortDescriptionDiv = document.createElement('p');
        if(project.short_description) {
            projectShortDescriptionDiv.textContent = project.short_description;
        } else {
            console.warn(`Project missing 'short_description', cannot set short_description for project: ${project.project_name || 'Unnamed Project'}`);
        }
        // project long description
        const projectLongDescriptionDiv = document.createElement('p');
        if(project.long_description) {
            projectLongDescriptionDiv.textContent = project.long_description;
        } else {
            console.warn(`Project missing 'long_description', cannot set long_description for project: ${project.project_name || 'Unnamed Project'}`);
        }
        // card image
        const imagePath = project.card_image || defaultBackgroundCardImage;
        projectDiv.style.backgroundImage = `url('${imagePath}')`;
        projectDiv.style.backgroundSize = 'cover';
        projectDiv.style.backgroundPosition = 'center';
        projectDiv.style.backgroundRepeat = 'no-repeat';
        // project url
        const projectLink = document.createElement('a');
        projectLink.href = project.url || '#'; // Use project.url from JSON
        projectLink.target = '_blank'; // Opens in a new tab
        projectLink.rel = 'noopener noreferrer'; // Security for _blank

        // append the new elements to the new project card div
        projectDiv.append(projectNameDiv);
        projectDiv.append(projectShortDescriptionDiv);
        projectDiv.append(projectLongDescriptionDiv);
        projectLink.append(projectDiv);
        // append the fully constructed project card link to the document fragment
        documentFragment.append(projectLink);
    });
    // append the entire fragment to the sidebar
    projectListDiv.append(documentFragment);

    console.log("'projectList' section built successfully.");
}

const isMobileLayout = () => {
    const projectSection = document.querySelector("#projectSection");
    if(projectSection) {
        const computedStyle = window.getComputedStyle(projectSection);
        return computedStyle.flexDirection === 'column';
    }
    return window.innerWidth <= 768;
}

const checkScrollPosition = () => {
    if (isMobileLayout()) {
        // Horizontal scroll
        arrowLeft.style.opacity = projectListElement.scrollLeft > 0 ? '1' : '0.5';
        arrowRight.style.opacity = (projectListElement.scrollWidth - projectListElement.scrollLeft - projectListElement.clientWidth) > 1 ? '1' : '0.5';
    } else {
        // Vertical scroll
        arrowLeft.style.opacity = projectListElement.scrollTop > 0 ? '1' : '0.5';
        arrowRight.style.opacity = (projectListElement.scrollHeight - projectListElement.scrollTop - projectListElement.clientHeight) > 1 ? '1' : '0.5';
    }
};

const setupProjectNavigation = () => {
    const projectListElement = document.querySelector("#projectList");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    if(!projectListElement || !arrowLeft || !arrowRight) {
        console.error("Error: Project list or navigation arrows were not found. It is not possible to setup the navigation.");
    }
    // scroll amount 
    const scrollAmountHorizontal = 250; // pixels to scroll horizontally
    const scrollAmountVertical = 250; // pixels to scroll vertically
    
    arrowLeft.addEventListener('click', () => {
        if(isMobileLayout()) {
            // Mobile: scroll left
            projectListElement.scrollBy({
                left: -scrollAmountHorizontal,
                behavior: 'smooth'
            })
        } else {
            // Desktop: scroll up
            projectListElement.scrollBy({
                top: -scrollAmountVertical,
                behavior: 'smooth'
            })
        }
    })

    arrowRight.addEventListener('click', () => {
        if(isMobileLayout()) {
            // Mobile: scroll right
            projectListElement.scrollBy({
                left: scrollAmountHorizontal,
                behavior: 'smooth'
            })
        } else {
            // Desktop: scroll down
            projectListElement.scrollBy({
                top: scrollAmountVertical,
                behavior: 'smooth'
            })
        }
    })

    console.log("Project navigation setup successfully.");
}

initialization();
