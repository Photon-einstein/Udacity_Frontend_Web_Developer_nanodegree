# Tasks:

1. Use ESLint and Prettier to fix the errors in the following files:
   - src/shuffle.js (Done)
   - src/utilityRenderFunctions.js (Done)

```bash
   npx eslint src/<...>.js
```

2. Install Gulp and Parcel

```bash
npm i --save-dev gulp gulp-cli gulp-shell
npm i --save-dev parcel

```

3. Configure Gulp

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
   npx eslint src/shuffle.js
   npx eslint src/utilityRenderFunctions.js
```

99. Perform smoke tests, the application should run (in progress)
