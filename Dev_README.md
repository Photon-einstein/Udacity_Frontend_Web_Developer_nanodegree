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

- W3C Markup Validation Service: Ideal for ensuring HTML syntax is compliant with web standards. [W3C Markup Validator](https://validator.w3.org/)

- Lighthouse: A comprehensive audit tool for performance, accessibility, SEO, and best practices. (extension, works with pages locally as well)

- IBM Equal Access Accessibility Checker: A robust accessibility checker integrated into DevTools, focusing on WCAG compliance. (extension)

- WAVE Evaluation Tool: Provides a user-friendly, visual accessibility audit, ideal for pinpointing issues directly on the page. (extension)

- Web Accessability checker [WEB AIM](https://webaim.org/resources/contrastchecker/)

### npm documentation page

- Installs and manages project dependencies: Downloads and organizes external code packages required by your project from the npm Registry.
- Defines project metadata and scripts: Uses package.json to list dependencies, project info, and custom runnable commands.
- Provides access to a vast code registry: Connects developers to millions of reusable open-source (and private) JavaScript modules.
- Manages package versions: Ensures consistent environments across teams using semantic versioning rules.
- Automates development workflows: Enables easy execution of project-specific tasks defined in scripts.

[npm documentation page](https://docs.npmjs.com/about-npm)

### Yarn documentation page

- Installs and manages project dependencies: Downloads and organizes external code packages, offering an alternative to npm for fetching from the npm Registry.
- Optimizes installation speed and reliability: Uses features like a global cache and .yarn.lock files for faster, consistent builds.
- Defines project metadata and scripts: Utilizes package.json for dependency listing, project information, and custom runnable commands, similar to npm.
- Provides enhanced security guarantees: Verifies package integrity using checksums to prevent tampering.
- Supports offline installations: Can install packages from its local cache without an internet connection if previously downloaded

[Yarn documentation page](https://classic.yarnpkg.com/lang/en/docs/)

### Webpack documentation page

- Bundles project assets: Combines JavaScript, CSS, images, and other front-end modules into optimized bundles for browsers.
- Manages dependencies: Creates a comprehensive dependency graph to understand all code relationships.
- Transforms various file types: Uses "loaders" to process non-JavaScript assets (e.g., compile Sass, transpile modern JS with Babel).
- Optimizes output for production: Applies minification, tree-shaking, and code splitting for faster load times and smaller file sizes.
- Enhances developer experience: Provides features like hot module replacement (HMR) for efficient development workflows.

[Webpack documentation page](https://webpack.js.org/)

### Parcel documentation page

- Bundles project assets with zero configuration: Automatically processes and bundles JavaScript, CSS, HTML, and other files without requiring extensive setup.
- Provides a fast development experience: Offers incredibly quick rebuild times and built-in Hot Module Replacement (HMR) out-of-the-box.
- Supports common web technologies natively: Understands many file types (e.g., Babel, PostCSS, TypeScript) without needing separate loaders or plugins.
- Optimizes for production builds: Includes automatic tree-shaking, minification, and image optimization for deployment.
- Handles dependency management intuitively: Builds a dependency graph starting from an HTML, JS, or CSS entry point, resolving imports seamlessly.

[Parcel documentation page](https://parceljs.org/docs/)

### Gulp documentation page

- Automates repetitive development tasks: Helps streamline workflows by running common actions like compiling, optimizing, and testing.
- Code-driven configuration: Uses JavaScript files (gulpfile.js) to define tasks, offering flexible and programmable automation.
- Process files through pipelines: Streams files from a source, applies transformations via plugins, and outputs them to a destination.
- Enhances development efficiency: Speeds up processes like code compilation, minification, and static asset management.
- Focuses on task runner capabilities: Primarily used for task orchestration rather than module bundling (a role typically handled by Webpack/Parcel).

[Gulp documentation page](https://gulpjs.com/)

### Mocha documentation page

- JavaScript test framework: Provides a robust structure for writing and organizing unit and integration tests.
- Flexible and extensible: Doesn't dictate assertion or mocking libraries, allowing developers to choose their preferred tools (e.g., Chai, Sinon.js).
- Supports various testing styles: Accommodates behavior-driven development (BDD) and test-driven development (TDD) interfaces.
- Run tests in diverse environments: Can execute tests in Node.js, browsers, and other JavaScript runtimes.
- Provides clear test reporting: Outputs detailed results indicating successes, failures, and test durations.

[Mocha documentation page](https://mochajs.org/)

## Chai documentation page

- Assertion library for JavaScript: Provides a rich set of functions to declare how tests should behave and verify outcomes.
- Works seamlessly with test frameworks: Commonly paired with testing frameworks like Mocha or Jest.
- Offers multiple assertion styles: Supports BDD styles (expect and should) and a TDD style (assert) for developer preference.
- Enhances test readability: Allows for highly expressive and human-readable test assertions (e.g., expect(foo).to.be.a('string');).
- Extensible with plugins: Can be extended with third-party plugins to add custom assertions for specific needs.

[Chai documentation page](https://www.chaijs.com/)

## Cypress documentation page

- End-to-End Test Automation: Primarily used for writing fast, reliable, and consistent end-to-end tests for web applications.
- Developer-Friendly Experience: Runs directly in the browser, offering real-time reloads, time-travel debugging, and clear command logging.
- Automatic Waiting: Intelligently waits for DOM elements and network requests, reducing flakiness without manual waits.
- Component and API Testing: Can also be used for isolated component testing and making direct API requests for integration tests.
- Interactive Debugging: Provides a visual test runner with developer tools integration for easy debugging of test failures.

[Cypress documentation page](https://docs.cypress.io/app/get-started/why-cypress)

## ESLint

- Static code analysis tool: Automatically checks JavaScript code for programmatic errors and stylistic issues.
- Enforces coding standards: Helps teams maintain consistent code quality, style, and best practices.
- Highly configurable: Allows developers to define custom rules, plugins, and parsers to match project needs.
- Identifies potential bugs: Catches common mistakes and anti-patterns before runtime, improving code reliability.
- Integrates with editors and build tools: Provides real-time feedback during development and can be part of CI/CD pipelines.

[ESLint documentation page](https://eslint.org/docs/latest/)

To install ESLint, use the following command:

```bash
npm init @eslint/config@latest
```

This will guide you through a series of prompts to customize the tool and configure  
the rules ESLint will use to help detect potential issues in your code.

## Prettier

- Opinionated Code Formatter: Automatically reformats code to a consistent, predefined style across a project.
- Removes Original Styling: Parses code and reprints it from scratch, ensuring uniform formatting regardless of author.
- Supports Many Languages: Works with JavaScript, CSS, HTML, TypeScript, GraphQL, Markdown, and more.
- Integrates with Editors: Provides seamless "format on save" functionality within popular code editors like VS Code.
- Eliminates Style Debates: Frees up development teams from manual formatting and code review discussions about style.

[Prettier documentation page](https://prettier.io/docs/)
