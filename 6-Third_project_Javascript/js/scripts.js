const fs = require('fs'); // Import the Node.js File System module
const path = require('path'); // Import the Node.js Path module for reliable path handling

// Construct the file path using Node.js's path module
// __dirname refers to the directory of the currently executing script (scripts.js)
// Then we navigate up one level, into 'data', and then to the JSON file.
const aboutMeDataFileLocation = path.join(__dirname, '..', 'data', 'aboutMeData.json');
const projectsDataFileLocation = path.join(__dirname, '..', 'data', 'projectsData.json');

let aboutMeDataContainer = null
let projectsDataContainer = null

async function loadAboutMeDataFile() {
    try {
        // Use fs.promises.readFile for an async/await approach
        const fileContent = await fs.promises.readFile(aboutMeDataFileLocation, 'utf8');
        aboutMeDataContainer = JSON.parse(fileContent);
        console.log("'aboutMeData.json' file content loaded into global variable: ", aboutMeDataContainer);
    }
    catch(error) {
        // Check if it's a file not found error vs. a JSON parsing error
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found at ${aboutMeDataFileLocation}`);
        } else if (error instanceof SyntaxError) {
            console.error(`Error parsing JSON from ${aboutMeDataFileLocation}:`, error);
        } else {
            console.error("Failed to load file 'aboutMeData.json'", error);
        }
    }
}

async function loadProjectsDataFile() {
    try {
        // Use fs.promises.readFile for an async/await approach
        const fileContent = await fs.promises.readFile(projectsDataFileLocation, 'utf8');
        projectsDataContainer = JSON.parse(fileContent);
        console.log("'projectsData.json' file content loaded into global variable: ", projectsDataContainer);
    }
    catch(error) {
        // Check if it's a file not found error vs. a JSON parsing error
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found at ${projectsDataFileLocation}`);
        } else if (error instanceof SyntaxError) {
            console.error(`Error parsing JSON from ${projectsDataFileLocation}:`, error);
        } else {
            console.error("Failed to load file 'projectsData.json'", error);
        }
    }
}

async function initialization() {
    try {
        // Use Promise.all to wait for both files to load concurrently
        await Promise.all([
            loadAboutMeDataFile(),
            loadProjectsDataFile()
        ]);
    }
    catch(error) {
        console.error("Failed in the initialization phase: ", error);
    }
}

initialization();

