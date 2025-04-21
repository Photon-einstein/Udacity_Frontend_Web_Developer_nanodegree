### Inspiration from other projects:

* Repo 1 until Project 2:
https://github.com/RusPosevkin/udacity-frontend


## Project description
You’ll build two key sections: **The first is an Intro Banner**, featuring your photo, a 
short description, and two 'call to action' buttons with alternative colors.

First page: Intro Banner
Items in there: 
- your photo;
- short description (persuasive description);
- two 'call to action' buttons with alternative colors.



**The second section is Latest Projects** containing three project cards and a button. You’ll work from a provided  
wireframe to match the layout as closely as possible. Your site will be fully responsive across devices and meet  
A and AA accessibility standards.

Second page: Latest Projects
Items in there:
- three project cards;
- a button;


Folder structure:

- dist folder: 

    were your compiled CSS file (main.css) will live

- src/img folder: 

    store all the images here. There is a placeholders image for your Introduction banner. You can use that on, but  
    you are encouraged to use your own one.

- src/scss: 

    store all CSS preprocessors folders and files here.


Following the principle of the BEM methodology your scss folder will contain:

- base: 

    Contains foundational styles such as resets, typography, and general element styles (e.g., for body, headings, links).

- blocks: 

    House styles for individual components, each in its own file, following the BEM methodology (e.g., button.scss, header.scss).

- utils: 

    Includes reusable helper styles like variables, mixins (resusable blocks of code), and utility classes that support  
    the design system.


**More information for the first web page**

**Name: Intro Banner**
Content:  
    - include a background image for the banner;  
    - Add a bio section with:  
        * A profile image.  
        * A main heading (e.g., "[Your Name]'s Web Development Portfolio").  
        * A short paragraph describing yourself.  

        Note: If you don't feel comfortable using your own photo, you can use a placeholder image for the purpose of     
        this project. Using a professional headshot can positively contribute to a developer's personal branding,  
        but you don't have to make that decision just yet.  

Responsive Behavior: 
    - Align the profile image and text content side by side on larger screens.
    - Stack the profile image above the text content on mobile.

**More information for the second web page**

**Latest Projects Section**

Content:
    - include a heading (e.g., "Latest Projects").

    - Add three project cards, each with:
        * An image (placeholder images are fine).
        * A title.
        * A short description.
    
    - Add a centered button bellow the cards, that would link to a project page.

Design:
    - Ensure the cards are equal in width and height.

    - Apply hover or tabbing transitions to project cards.

Navigation Header:
    - Create a fixed navbar with projects, skills, resume, and contact links.

    - The navbar (header) should:
        * Stick to the top of the page and shrink in height on scroll.
        * Display links on desktop and optionally collapse into a mobile-friendly "burger" menu for smaller screens.

        Note: If you choose not to incorporate a burger menu into your mobile view, keep in mind that you still need  
        to adhere to responsiveness standards and ensure that your links do not overflow beyond the width of the header.

Footer:
    - Create a footer at the bottom of your page with copyright information. (e.g. &copy; [Your full name] 2025)

Accessibility:
    - Meet the A and AA accessibility standards outlined in the provided checklist.


Example Style Folder Structure:

src  
├── index.html  
├── pages  
│     ├── secondary-page.html  
├── scss  
│     ├── base  
│     │   ├── _resets.scss  
│     │   └── base.scss  
│     ├── blocks  
│     │   ├── _footer.scss  
│     │   ├── _header.scss  
│     │   ├── _any_block_partial.scss  
│     │   └── blocks.scss  
│     └── utils   
│         ├── _mixins.scss  
│         ├── _variables.scss  
│         └── utils.scss  

Guidelines in terms of BEM with organization of Utilities:

- I will use the Granular Approach

    With this format, each file, directly imports only the required utils/<file> required for the formatting.

    Example: in _header.scss file

    ```css
    @use '../utils/variables';
    @use '../utils/mixins';

    .header {
        background-color: _variables.$primary-color;
        @include _mixins.flex-center;
    }
    ```


Development Strategy:

1. Review the Wireframe: Carefully study the provided wireframe to understand the expected layout for the Intro  
Banner and Latest Projects sections.

Pay attention to spacing, alignment, and element placement as you will be evaluated on your ability to match the wireframe.

2. Decide on a Visual Theme: Think about your site`s aesthetics.  
Will you use a light or dark theme?  
What colors will you use for consistency?  
How will your buttons look - rounded, flat or with shadows?  
Apply these choices consistently to maintain a cohesive design.  

3. Set up the right structure of the folders for the scss (Done)

4. Compile your CSS into a main.css file. Ensure that it compiles directly into the dist folder. (Done)
(Use the live preview to view the changes in real time)

5. Build out your components: 
* Your starter code comes with the basic structure of the webpage.
* Build out the inner content with consideration of how each component will be nested in the overall hierarchy.
* Assign classes to your components based on BEM methodology by assigning a general block name class to each section,  
and then any elements within those blocks, with modifiers if needed.

6. Implement Accessibility Standards:
* Refer to the accessibility checklist to ensure your site meets A and AA standards.
* Use semantic tags for structure, descriptive alt attributes for images, and ARIA labels where necessary.
* Test your site using accessibility tools like Lighthouse or WAVE.

7. Style your components:
* With the HTML components built and their classes assigned, create a partial file for each block.
* Within each partial, recreate the appropriately nested structure based on BEM methodology. (See rubric for further help.)
* Create any mixins of variables you might need. A good start would be to create variables for your colors and mixins for  
media queries.
* As you continue to add new styles, pay attention to any styles that are frequently repeated in your code and consider  
refactoring them into mixins or variables.

8. Test Responsiveness: 
* Use browser developer tools to simulate mobile, tablet, and desktop views.
* Confirm that the layout adapts correctly and that elements are neither overlapping nor misaligned at any screen size.

9. Iterate and refine:
* Revisit the wireframe and compare your design to ensure it matches the expected layout.
* Adjust for visual balance and responsiveness as needed.

### BEM methodology information

```bash
.block__element--modifier
```

1. Block

* Represents a standalone component.
* Should be meaningful and reusable.
* Example: card, button, navbar

Example:
```html
<div class="card"> ... </div>
```

2. Element

* A child part of the block — has no standalone meaning
outside the block.
* Always uses __ (double underscore).
* Name example: 
    card__title, 
    button__icon, 
    navbar__link

Example:
```html
<div class="card">
  <h3 class="card__title">Project Title</h3>
</div>
```

3. Modifier

* A variation or state of a block or element.
* Always uses -- (double dash).
* Name example:
    card--highlighted,
    button--primary,
    navbar__link--active

Example:
```html
<div class="card card--highlighted">
  <h3 class="card__title">Featured Project</h3>
</div>
```
-----------------------------------------------------------------------------------------------------------------------

List of TODO`s to perform:

1. Get a clear understanding of the requirements of the project (Done)
2. Read the notes that I wrote of the project to get a clear start to the project (Done)
3. Create structure for the skeleton scss to generate the css (Done)
4. Add the notes for the BEM methodology to this document for consultation (Done)
5. Add the html code for the first page (in progress)
    5.1. Make the banner section photo (Done)
    5.2. Make the profile image (Done)
    5.3. Make the content of the first page (Done)
    5.4. Make the footer of the first page (Done)
6. Add the html code for the second page (Done)
    6.1. Make the header section (Done)
    6.2. Make the section latests projects (Done)
    6.3. Make the footer of the second page (Done)

7. Add the CSS code for the first page (large and small screens) (in progress)
    7.1.0. Make the styling of the body / html (in progress)

    7.1.1. Make the styling of the banner for large screens (Done)
    7.1.2. Make the styling of the banner for small screens (Done)

    7.2.1. Make the styling of the bio section for large screens (in progress)
    
    7.2.2. Make the styling of the bio section for small screens (TBD)
    7.3.1. Make the styling of the footer section for large screens (TBD)
    7.3.2. Make the styling of the footer section for small screens (TBD)

8. Add the CSS code for the second page (large and small screens) (TBD)
    8.1.0. Make the styling of the body / html (TBD)
    8.1.1. Make the styling for the navigation header for large screens (TBD) --- similar to '.history-content' class
    8.1.2. Make the styling for the navigation header for small screens (TBD)
    8.2.1. Make the styling for the section of latest projects for large screens (TBD)
    8.2.1. Make the styling for the section of latest projects for small screens (TBD)
    8.3.1. Make the styling of the footer section for large screens (TBD)
    8.3.2. Make the styling of the footer section for small screens (TBD)

9. Add the CSS code for the second page, large screens second (TBD)
10. Run the W3C validation tool on the first page, and fix the problems that the tool found (TBD)
11. Run the W3C validation tool on the second page, and fix the problems that the tool found (TBD)
12. Check the required accessibility standards for A and AA at the following link 
[Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/) 
for the first page (TBD)
13. Check the required accessibility standards for A and AA at the following link 
[Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/) 
for the second page (TBD)