// js/dataLoader.js

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

export {
    loadAboutMeDataFile,
    loadProjectsDataFile,
    aboutMeDataContainer,
    projectsDataContainer
};
