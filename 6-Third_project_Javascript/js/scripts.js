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
    }
    catch(error) {
        console.error("Failed in the initialization phase: ", error);
    }
}
const buildAboutMeDiv = async() => {
    const aboutMeDiv = document.querySelector("#aboutMe");
    // create and populate a new paragraph
    const bioParagraph = document.createElement('p');
    bioParagraph.textContent = aboutMeDataContainer.aboutMe;
    // create a new div for a picture
    const pictureDiv = document.createElement('div')
    pictureDiv.classList.add('headshotContainer')
    // create and populate a new image
    const imgAboutMeDiv = document.createElement('img');
    imgAboutMeDiv.src = aboutMeDataContainer.headshot;
    imgAboutMeDiv.alt = "profilePic"
    pictureDiv.append(imgAboutMeDiv)
    // create document fragment
    const documentFragment = document.createDocumentFragment()
    documentFragment.append(bioParagraph)
    documentFragment.append(pictureDiv)
    // add new document fragment to the already existing section div
    aboutMeDiv.append(documentFragment)

    // const titleDiv = document.querySelector('body').firstElementChild;
    // titleDiv.classList.add('title')
    // // Add card container if to the section div
    // const sectionDiv = document.querySelector('section');
    // sectionDiv.id = 'cardContainer'
    // // Create profile card
    // const profileCardDiv = document.createElement('div')
    // profileCardDiv.classList.add('profileCard')
    // // Create div for profile picture
    // const pictureFrameDiv = document.createElement('div')
    // pictureFrameDiv.classList.add('picFrame')
    // // Create image inside class 'picframe' of div
    // const imgDiv = document.createElement('img')
    // imgDiv.src = "./images/otter_profile.webp"
    // imgDiv.alt = "'profilePic"
    // // append imgDiv into pictureFrameDiv and the last one into profileCardDiv
    // pictureFrameDiv.append(imgDiv)
    // profileCardDiv.append(pictureFrameDiv)
    // // Create div with class 'userInfo'
    // const userInfoDiv = document.createElement('div')
    // userInfoDiv.classList.add('userInfo')
    // // Add content to div with class 'userInfo'
    // const simpleDiv = document.createElement('div')
    // const header2 = document.createElement('h2')
    // const paragraph = document.createElement('p')
    // paragraph.textContent = "Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are\
    //                     Frappuccinos and fish."
    // simpleDiv.append(header2)
    // simpleDiv.append(paragraph)
    // userInfoDiv.append(simpleDiv)
    // // Create simple div with button
    // const buttonDiv = document.createElement('div')
    // const button = document.createElement('button')
    // button.classList.add('active')
    // button.textContent="Online now!"
    // buttonDiv.append(button)
    // // Add button to div with 'userInfo' class
    // userInfoDiv.append(buttonDiv)
    // // userInfoDiv to profileCardDiv
    // profileCardDiv.append(userInfoDiv)
    // // create document fragment
    // const documentFragment = document.createDocumentFragment()
    // documentFragment.append(profileCardDiv)
    // // add new document fragment to the already existing section div
    // sectionDiv.append(documentFragment)
}

initialization();
