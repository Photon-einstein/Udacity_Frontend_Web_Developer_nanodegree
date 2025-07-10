# ESLint and Prettier Setup

## **Summary**

In this exercise, you will configure ESLint and Prettier for this project, using them to locate and fix errors in `gallery.js`.

---

### **Resources**

- [ESLint Documentation](https://eslint.org/docs/latest/use/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/)

---

## **Instructions**

### **1. Install ESLint**

1. Open the terminal.
2. Run the following command to initialize ESLint in your project:
   ```
   npm init @eslint/config@latest
   ```
3. When prompted, select the following options:
   - **How would you like to use ESLint?**: Check syntax and find problems
   - **What type of modules does your project use?**: JavaScript modules (import/export)
   - **Which framework does your project use?**: None of these
   - **Does your project use TypeScript?**: No
   - **Where does your code run?**: Browser
   - **Would you like to install the necessary dependencies now?**: Yes
   - **Which package manager do you want to use?**: npm

---

### **2. Add ESLint Rules**

1. Open the `eslint.config.mjs` file.
2. Add the following rules under the `rules` section to enforce specific coding standards:
   ```javascript
   rules: {
     "no-var": "error",             // Disallow the use of 'var'
     "no-unused-vars": "error",     // Disallow unused variables
     "semi": ["error", "always"],   // Require semicolons at the end of statements
     "no-console": "warn",          // Warn if 'console.log' is left in the code
   },
   ```

---

### **3. Run ESLint**

1. Run ESLint on the `gallery.js` file:
   ```
   npx eslint src/gallery.js
   ```
2. Review the output to locate errors and warnings.
3. Fix the issues in `gallery.js` based on the feedback provided by ESLint.

---

### **4. Verify ESLint Fixes**

1. Re-run ESLint to ensure all errors and warnings have been addressed:
   ```
   npx eslint src/gallery.js
   ```
2. If there are no errors or warnings, your code is now compliant with the ESLint rules.

---

### **5. Install Prettier in VS Code**

1. Open the **Extensions** view:
   - Press `Ctrl + Shift + X` (Windows/Linux) or `Cmd + Shift + X` (macOS).
2. Search for **Prettier - Code Formatter**.
3. Click **Install** to add it to your VS Code.

---

### **6. Set Prettier as the Default Formatter**

1. Open **Settings**:
   - Go to **File → Preferences → Settings** (Windows/Linux) or **Code → Preferences → Settings** (macOS).
2. Search for **Default Formatter**.
3. From the dropdown under `Editor: Default Formatter`, select:
   ```
   esbenp.prettier-vscode
   ```
4. Enable **Format on Save**:
   - Search for `Format on Save`.
   - Check the box for `Editor: Format On Save`.

---

### **7. Add Custom Prettier Rules**

1. Open your `package.json` file.
2. Add the following custom rules:
   ```json
   "prettier": {
     "semi": true,
     "trailingComma": "all",
     "tabWidth": 4
   }
   ```

---

### **8. Format Code with Prettier**

- Prettier will now format your code automatically when you save a file.
- To manually format all files, run:
   ```
   npx prettier --write .
   ```
- Use prettier to fix the formatting in galler.js
