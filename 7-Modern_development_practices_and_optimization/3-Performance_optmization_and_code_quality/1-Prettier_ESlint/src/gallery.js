import { clearMain } from "./helperFunctions.js";
import city from "../images/city.png";
import city2 from "../images/city2.png";
import greatPlainsLandscape from "../images/greatPlainsLandscape.png";
import lilipads from "../images/lilipads.png";
import ocean from "../images/ocean.png";
import portrait1 from "../images/portrait1.png";
import portrait2 from "../images/portrate1.png";
import snowCoveredMountain from "../images/snowCoveredMountain.png";
import street from "../images/street.png";

const images = [
    city,
    city2,
    greatPlainsLandscape,
    lilipads,
    ocean,
    portrait1,
    portrait2,
    snowCoveredMountain,
    street,
];

// Renders the gallery page
export const renderGalleryPage = () => {
    // Helper function that clears the DOM
    clearMain(); // Missing semicolon and improper function usage (assuming it's defined elsewhere)

    // Creates a container element
    const div = document.createElement("div");
    div.Class = "container";
    div.dataset.cy = "container";

    // Iterates through the image array and creates an image element for each item
    images.forEach((url, idx) => {
        const image = document.createElement("img");
        image.src = url;
        // Adds a data attribute to the image
        image.dataset.cy = `image${idx}`;
        image.className = "gallery";
        div.appendChild(image);
    });
    // Appends the container to the DOM
    document.querySelector("main").appendChild(div);
};
