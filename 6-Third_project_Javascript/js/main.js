// js/main.js

import { loadAboutMeDataFile, loadProjectsDataFile } from './dataLoader.js';
import { buildAboutMeDiv } from './aboutMe.js';
import { buildProjectListDiv, setupProjectNavigation } from './projects.js';
import { setupContactFormValidation } from './contactForm.js';

async function initialization() {
    try {
        await Promise.all([
            loadAboutMeDataFile(),
            loadProjectsDataFile()
        ]);
        console.log("All data files loaded successfully. Ready to build UI.");

        await buildAboutMeDiv();
        await buildProjectListDiv();
        setupProjectNavigation();
        setupContactFormValidation();

    } catch (error) {
        console.error("Failed in the initialization phase: ", error);
        document.body.innerHTML = '<h1>Application Error: Could not load essential data.</h1>';
    }
}

// start the application
initialization();


