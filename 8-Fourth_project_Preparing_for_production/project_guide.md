# Tasks:

1. Use ESLint and Prettier to fix the errors in the following files:
   - src/shuffle.js (Done)
   - src/utilityRenderFunctions.js (Done)

```bash
   npx eslint src/<...>.js
```

Commands applied on the root of the project:

```bash
   npx eslint src/shuffle.js
   npx eslint src/utilityRenderFunctions.js
```

2. Install Gulp and Parcel

```bash
npm i --save-dev gulp gulp-cli gulp-shell
npm i --save-dev parcel

```

3. Configure Gulp (Done)

Configure Gulp
Create a gulpfile.js
Import gulpand gulp-shell.
Create a Gulp task to build and run Parcel as the default task.
Running npm run gulp should build and serve the project.
Visit http://localhost:1234 in your browser to verify the application is working.
Navigate to the dist directory to verify that parcel has optimized images, minimize and concatenated files.
Note: Parcel does this automatically no further changes or configuration is necessary here. Do not make changes to the dist file.

Commands applied on the root of the project:

```bash
   npm run gulp
```

4. Perform smoke tests, the application should run (Done)

5. Unit Test with Mocha (Done)

Install mocha dependencies by entering (Done)

```bash
npm i --save-dev mocha chai
```

- Create a directory called test and create a test file called shuffle.js (Done)
- Create a described block for the shuffle function. (Done)
- Create at least one test that verifies that the shuffle function shuffles the indexes of an array (Done)
- Extra tests for this function are encouraged but not required. (Done)
- Return to gulpfile.js and create a new different called test task that will run your new unit test. (TBD)
- run the test with npm run gulp test. (TBD)

To run the gulp unit tests:

```bash
npm run gulp test
```

6. Install Cypress, running the following command:

```bash
npm i --save-dev cypress
```

7. To run the Cypress's task runner, run the following command:

```bash
npx cypress open
```

8. Create two specs (Done)

   - navigation.cy.js
   - form.cy.js

9. Write the ee test of the navigation.cy.js file (Done)

   Requirements:

   - Create a described block for the navigation tests.

   Write tests to verify the following:

   - Clicking on "Card Set" in the side menu navigates to the page containing the card sets. (Done)

   - Clicking on "About" in the side menu navigates to the About page. (Done)
   - Clicking on "Home" in the side menu navigates to the Home page. (Done)

Open two terminals, one to run the app, another to run the ee tests.

To run the app:

```bash
npm run gulp
```

This starts the server at [http://localhost:1234/](http://localhost:1234/).
Use the second terminal for all other commands.

To run the ee tests in the terminal:

```bash
npm run cypress
```

To run the ee tests in the cypress application:

```bash
npm run cypress:open
```

10. Navigate to cypress/e2e forms.cy.js and add ee tests that follow the following specs (Done)

- Create tests to verify the functionality of both the Create Set Form and the Add Card Form:
- Test the "happy path" for both forms (i.e., valid input and successful submission).
- Test the "unhappy path" where the user submits an empty string for any of the inputs.  
  An error should be rendered in these cases.

Checklist:

- happy path for the create set form (Done);
- unhappy path for the create set form (Done);

- happy path for the add card form (Done);
- unhappy path for the add card form (Done);

11. Assess if all the requirements are already met or there is a need to do more work (Done)

    11.1. Shorten css selectors to a minimum required, test the app while changing (Done)

    - about.css (Done)
    - flipcard.css (Done)
    - form.css (Done)
    - home.css (Done)
    - navigationMenu.css (Done)
    - style.css (Done)

Requirement:

- At minimum CSS selectors should be simplified. The project starts with long selectors like  
  body main div .aboutContainer and should be manually shortened. Selectors like  
  .aboutContainer img are acceptable, but anything significantly longer is too complex.  
  Other manual optimizations are encouraged but not required.

12. Clean up code (Done)
