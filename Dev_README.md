## To start the live server

```bash
npx live-server
```

## To translate scss into css code from the project root directory:
```bash
sass ./src/scss/main.scss ./dist/main.css
```

### BEM naming guide

[BEM naming guide](https://getbem.com/naming/)

### SAASS documentation (CSS framework)
[SAAS documentation](https://sass-lang.com/documentation/)

### WCAG (Quick Reference)
[WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize)

### Web Accessibility Evaluation Tools List
[Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/)

**1. Validation Semantic HTML**

Summary of Each Tool’s Unique Features:

* W3C Markup Validation Service: Ideal for ensuring HTML syntax is compliant with web standards. [W3C Markup Validator](https://validator.w3.org/)

* Lighthouse: A comprehensive audit tool for performance, accessibility, SEO, and best practices. (extension, works with pages locally as well)

* IBM Equal Access Accessibility Checker: A robust accessibility checker integrated into DevTools, focusing on WCAG compliance. (extension)

* WAVE Evaluation Tool: Provides a user-friendly, visual accessibility audit, ideal for pinpointing issues directly on the page. (extension)

* Web Accessability checker [WEB AIM](https://webaim.org/resources/contrastchecker/)

### npm documentation page
* Installs and manages project dependencies: Downloads and organizes external code packages required by your project from the npm Registry.
* Defines project metadata and scripts: Uses package.json to list dependencies, project info, and custom runnable commands.
* Provides access to a vast code registry: Connects developers to millions of reusable open-source (and private) JavaScript modules.
* Manages package versions: Ensures consistent environments across teams using semantic versioning rules.
* Automates development workflows: Enables easy execution of project-specific tasks defined in scripts.

[npm documentation page](https://docs.npmjs.com/about-npm)

### Yarn documentation page
* Installs and manages project dependencies: Downloads and organizes external code packages, offering an alternative to npm for fetching from the npm Registry.
* Optimizes installation speed and reliability: Uses features like a global cache and .yarn.lock files for faster, consistent builds.
* Defines project metadata and scripts: Utilizes package.json for dependency listing, project information, and custom runnable commands, similar to npm.
* Provides enhanced security guarantees: Verifies package integrity using checksums to prevent tampering.
* Supports offline installations: Can install packages from its local cache without an internet connection if previously downloaded

[Yarn documentation page](https://classic.yarnpkg.com/lang/en/docs/)

### Webpack documentation page
* Bundles project assets: Combines JavaScript, CSS, images, and other front-end modules into optimized bundles for browsers.
* Manages dependencies: Creates a comprehensive dependency graph to understand all code relationships.
* Transforms various file types: Uses "loaders" to process non-JavaScript assets (e.g., compile Sass, transpile modern JS with Babel).
* Optimizes output for production: Applies minification, tree-shaking, and code splitting for faster load times and smaller file sizes.
* Enhances developer experience: Provides features like hot module replacement (HMR) for efficient development workflows.

[Webpack documentation page](https://webpack.js.org/)

### Parcel documentation page
* Bundles project assets with zero configuration: Automatically processes and bundles JavaScript, CSS, HTML, and other files without requiring extensive setup.
* Provides a fast development experience: Offers incredibly quick rebuild times and built-in Hot Module Replacement (HMR) out-of-the-box.
* Supports common web technologies natively: Understands many file types (e.g., Babel, PostCSS, TypeScript) without needing separate loaders or plugins.
* Optimizes for production builds: Includes automatic tree-shaking, minification, and image optimization for deployment.
* Handles dependency management intuitively: Builds a dependency graph starting from an HTML, JS, or CSS entry point, resolving imports seamlessly.

[Parcel documentation page](https://parceljs.org/docs/)

### Gulp documentation page
* Automates repetitive development tasks: Helps streamline workflows by running common actions like compiling, optimizing, and testing.
* Code-driven configuration: Uses JavaScript files (gulpfile.js) to define tasks, offering flexible and programmable automation.
* Process files through pipelines: Streams files from a source, applies transformations via plugins, and outputs them to a destination.
* Enhances development efficiency: Speeds up processes like code compilation, minification, and static asset management.
* Focuses on task runner capabilities: Primarily used for task orchestration rather than module bundling (a role typically handled by Webpack/Parcel).

[Gulp documentation page](https://gulpjs.com/)
