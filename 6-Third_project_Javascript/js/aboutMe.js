// UI Building Functions
import { aboutMeDataContainer } from './dataLoader.js';

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

export {buildAboutMeDiv};
