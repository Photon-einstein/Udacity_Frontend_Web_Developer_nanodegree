// Global data containers
const aboutMeDataFileLocation = 'data/aboutMeData.json';
const projectsDataFileLocation = 'data/projectsData.json';

let aboutMeDataContainer = null;
let projectsDataContainer = null;

// Data Loading Functions
async function loadAboutMeDataFile() {
    try {
        const response = await fetch(aboutMeDataFileLocation);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        aboutMeDataContainer = await response.json();
        console.log("'aboutMeData.json' file content loaded into global variable: ", aboutMeDataContainer);
    } catch (error) {
        console.error("Failed to load file 'aboutMeData.json' in browser:", error);
        aboutMeDataContainer = {}; // Fallback for error
    }
}

async function loadProjectsDataFile() {
    try {
        const response = await fetch(projectsDataFileLocation);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        projectsDataContainer = await response.json();
        console.log("'projectsData.json' file content loaded into global variable: ", projectsDataContainer);
    } catch (error) {
        console.error("Failed to load file 'projectsData.json' in browser:", error);
        projectsDataContainer = {}; // Fallback for error
    }
}

// UI Building Functions

const buildAboutMeDiv = async () => {
    if (!aboutMeDataContainer || Object.keys(aboutMeDataContainer).length === 0) {
        console.error("Error: 'aboutMeDataContainer' is not loaded or is empty.");
        return;
    }
    const aboutMeDiv = document.querySelector("#aboutMe");
    if (!aboutMeDiv) {
        console.error("Error: Element with ID '#aboutMe' not found in the DOM.");
        return;
    }

    const bioParagraph = document.createElement('p');
    bioParagraph.textContent = aboutMeDataContainer.aboutMe || "About me information not available.";

    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('headshotContainer');

    const imgAboutMeDiv = document.createElement('img');
    const defaultHeadshotImage = '../images/default_headshot.webp';
    imgAboutMeDiv.src = aboutMeDataContainer.headshot || defaultHeadshotImage;
    imgAboutMeDiv.alt = "profilePic";
    pictureDiv.append(imgAboutMeDiv);

    const documentFragment = document.createDocumentFragment();
    documentFragment.append(bioParagraph);
    documentFragment.append(pictureDiv);

    aboutMeDiv.append(documentFragment);
    console.log("'aboutMe' section built successfully.");
};


// Function to update the project spotlight
const updateProjectSpotlight = (project) => {
    const projectSpotlightDiv = document.querySelector("#projectSpotlight");
    const spotlightTitlesDiv = document.querySelector("#spotlightTitles");

    if (!projectSpotlightDiv || !spotlightTitlesDiv) {
        console.error("Error: Project spotlight or titles div not found. Cannot update spotlight.");
        return;
    }

    // Set Background Image
    const defaultSpotlightImage = '../images/default_spotlight.webp'; // Create this placeholder!
    const imageUrl = project.spotlight_image || defaultSpotlightImage;

    projectSpotlightDiv.style.backgroundImage = `url('${imageUrl}')`;
    projectSpotlightDiv.style.backgroundSize = 'cover';
    projectSpotlightDiv.style.backgroundPosition = 'center';
    projectSpotlightDiv.style.backgroundRepeat = 'no-repeat';

    // --- Populate Spotlight Titles ---
    spotlightTitlesDiv.innerHTML = ''; // Clear previous content

    const spotlightProjectName = document.createElement('h3');
    spotlightProjectName.textContent = project.project_name || 'Project Name Not Available';
    spotlightTitlesDiv.append(spotlightProjectName);

    const spotlightLongDescription = document.createElement('p');
    spotlightLongDescription.textContent = project.long_description || 'No long description available.';
    spotlightTitlesDiv.append(spotlightLongDescription);

    // External Link
    if (project.url) {
        const projectExternalLink = document.createElement('a');
        projectExternalLink.href = project.url;
        projectExternalLink.target = '_blank';
        projectExternalLink.rel = 'noopener noreferrer';
        projectExternalLink.textContent = 'View Project';
        projectExternalLink.classList.add('project-spotlight-link'); // Add a class for styling
        spotlightTitlesDiv.append(projectExternalLink);
    } else {
        console.warn(`Project '${project.project_name}' has no URL for spotlight link.`);
    }
    // console.log(`Project spotlight updated for: ${project.project_name || 'Unnamed Project'}`);
};


const buildProjectListDiv = async () => {
    if (!projectsDataContainer || !Array.isArray(projectsDataContainer) || projectsDataContainer.length === 0) {
        console.error("Error: 'projectsDataContainer' is not loaded, is not an array, or is empty.");
        return;
    }
    const projectListDiv = document.querySelector("#projectList");
    if (!projectListDiv) {
        console.error("Error: Element with ID '#projectList' not found in the DOM.");
        return;
    }

    const documentFragment = document.createDocumentFragment();
    const defaultBackgroundCardImage = '../images/default_card.webp';

    projectsDataContainer.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectCard');
        // Store project data directly on the element for easy access by Intersection Observer
        projectDiv.dataset.projectId = project.project_id;
        projectDiv.dataset.projectName = project.project_name;
        projectDiv.dataset.projectLongDescription = project.long_description;
        projectDiv.dataset.projectSpotlightImage = project.spotlight_image;
        projectDiv.dataset.projectUrl = project.url;


        if (project.project_id) {
            projectDiv.id = project.project_id;
        } else {
            console.warn(`Project missing 'project_id', cannot set ID for project: ${project.project_name || 'Unnamed Project'}`);
        }

        const projectNameDiv = document.createElement('h4');
        projectNameDiv.textContent = project.project_name || '';

        const projectShortDescriptionDiv = document.createElement('p');
        projectShortDescriptionDiv.textContent = project.short_description || '';

        const imagePath = project.card_image || defaultBackgroundCardImage;
        projectDiv.style.backgroundImage = `url('${imagePath}')`;
        projectDiv.style.backgroundSize = 'cover';
        projectDiv.style.backgroundPosition = 'center';
        projectDiv.style.backgroundRepeat = 'no-repeat';

        // Add click listener to each project card to update the spotlight immediately
        projectDiv.addEventListener('click', () => {
            updateProjectSpotlight(project);
            // Optionally, add an 'active' class to the clicked card and remove from others
            document.querySelectorAll('.projectCard.active').forEach(card => card.classList.remove('active'));
            projectDiv.classList.add('active');
        });


        projectDiv.append(projectNameDiv);
        projectDiv.append(projectShortDescriptionDiv);
        documentFragment.append(projectDiv); // Append projectDiv directly
    });

    projectListDiv.append(documentFragment);

    console.log("'projectList' section built successfully.");

    // Initial spotlight update with the first project
    if (projectsDataContainer.length > 0) {
        updateProjectSpotlight(projectsDataContainer[0]);
        // Set the first card as active initially
        const firstCard = projectListDiv.querySelector('.projectCard');
        if (firstCard) {
            firstCard.classList.add('active');
        }
    }

    // Setup Intersection Observer for scrolling sync
    setupProjectSpotlightScrollSync();
};


const isMobileLayout = () => {
    const projectSection = document.querySelector("#projectSection");
    if (projectSection) {
        const computedStyle = window.getComputedStyle(projectSection);
        return computedStyle.flexDirection === 'column';
    }
    return window.innerWidth <= 768; // Fallback
};

const setupProjectNavigation = () => {
    const projectListElement = document.querySelector("#projectList");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    if (!projectListElement || !arrowLeft || !arrowRight) {
        console.error("Error: Project list or navigation arrows were not found. It is not possible to setup the navigation.");
        return; // Exit if elements are missing
    }

    // Scroll amount should ideally be dynamic based on card width/height + gap
    // For now, let's keep your fixed values, but be aware
    const scrollAmountHorizontal = 250;
    const scrollAmountVertical = 250;

    arrowLeft.addEventListener('click', () => {
        if (isMobileLayout()) {
            projectListElement.scrollBy({
                left: -scrollAmountHorizontal,
                behavior: 'smooth'
            });
        } else {
            projectListElement.scrollBy({
                top: -scrollAmountVertical,
                behavior: 'smooth'
            });
        }
    });

    arrowRight.addEventListener('click', () => {
        if (isMobileLayout()) {
            projectListElement.scrollBy({
                left: scrollAmountHorizontal,
                behavior: 'smooth'
            });
        } else {
            projectListElement.scrollBy({
                top: scrollAmountVertical,
                behavior: 'smooth'
            });
        }
    });

    console.log("Project navigation setup successfully.");
};

// NEW: Intersection Observer setup for spotlight synchronization
const setupProjectSpotlightScrollSync = () => {
    const projectListElement = document.querySelector("#projectList");
    if (!projectListElement) {
        console.error("Error: #projectList not found for Intersection Observer setup.");
        return;
    }

    const observerOptions = {
        root: projectListElement, // Observe intersection within the #projectList container
        rootMargin: '0px',
        // Trigger callback when 50% of the element is visible
        threshold: 0.8
    };

    const handleIntersection = (entries) => {
        let currentBestMatch = null;
        let highestRatio = 0;

        entries.forEach(entry => {
            // Only consider elements that are currently intersecting
            if (entry.isIntersecting) {
                // For horizontal scrolling (mobile), check if it's the "most" visible horizontally
                // For vertical scrolling (desktop), check if it's the "most" visible vertically
                // This simple approach uses intersectionRatio
                if (entry.intersectionRatio > highestRatio) {
                    highestRatio = entry.intersectionRatio;
                    currentBestMatch = entry.target;
                }
            }
        });

        if (currentBestMatch) {
            // Remove 'active' class from all project cards
            document.querySelectorAll('.projectCard.active').forEach(card => card.classList.remove('active'));
            // Add 'active' class to the newly visible project card
            currentBestMatch.classList.add('active');

            // Find the project data for the currentBestMatch element
            const projectId = currentBestMatch.dataset.projectId;
            const projectToDisplay = projectsDataContainer.find(p => p.project_id === projectId);

            if (projectToDisplay) {
                updateProjectSpotlight(projectToDisplay);
            }
        }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each project card
    const projectCards = projectListElement.querySelectorAll('.projectCard');
    projectCards.forEach(card => {
        observer.observe(card);
    });

    console.log("Project spotlight scroll synchronization setup successfully.");
};

async function initialization() {
    try {
        await Promise.all([
            loadAboutMeDataFile(),
            loadProjectsDataFile()
        ]);
        console.log("All data files loaded successfully. Ready to build UI.");

        await buildAboutMeDiv();
        await buildProjectListDiv();
        await setupProjectNavigation();

    } catch (error) {
        console.error("Failed in the initialization phase: ", error);
        document.body.innerHTML = '<h1>Application Error: Could not load essential data.</h1>';
    }
}

// start the application
initialization();