// js/contactForm.js

// Contact form validation
const setupContactFormValidation = () => {
    const contactForm = document.querySelector("#formSection");
    const emailInput = document.querySelector("#contactEmail");
    const emailErrorDiv = document.querySelector("#emailError");
    const charactersLeftDiv = document.querySelector("#charactersLeft");
    const messageInput = document.querySelector("#contactMessage");
    const messageErrorDiv = document.querySelector("#messageError");
    const submitButton = document.querySelector("#formsubmit");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidCharRegex = /[^a-zA-Z0-9@._-]/;
    const MAX_MESSAGE_LENGTH = 300;

    if (!contactForm || !emailInput || !emailErrorDiv || !charactersLeftDiv || !messageInput || !messageErrorDiv || !submitButton) {
        console.error("Error: One or more elements of the form validation were not found. Cannot set up the validation.")
        return;
    }

    // Helper function to display errors
    const displayError = (element, message) => {
        element.textContent = message;
    }

    // Helper function to clear errors
    const clearError = (element) => {
        element.textContent = '';
    }

    // Email validation
    const validateEmail = () => {
        const email = emailInput.value.trim();
        console.log("Email: " + email);
        clearError(emailErrorDiv); // clear previous error
        let isEmailValid = true;
        // email validation tests
        if(email.trim() === '') {
            displayError(emailErrorDiv, 'Email cannot be empty.');
            isEmailValid = false;
        } else if(!emailRegex.test(email)) {
            displayError(emailErrorDiv, 'Invalid email format (e.g. example@domain.com');
            isEmailValid = false;
        }
        if(invalidCharRegex.test(email)) {
            displayError(emailErrorDiv, 'Email contains invalid characters. Only letters, numbers, or \'@._-\' are allowed.');
            isEmailValid = false;
        }
        return isEmailValid;
    }

    // message validation
    const validateMessage = () => {
        const message = messageInput.value;
        clearError(messageErrorDiv); // clear previous error
        if(message.length > MAX_MESSAGE_LENGTH) {
            displayError(messageErrorDiv, `Message input cannot exceed ${MAX_MESSAGE_LENGTH} characters.`);
            return false;
        }
        return true;
    }

    // character count update
    const updateCharacterCount = () => {
        const currentLength = messageInput.value.length;
        charactersLeftDiv.textContent = `Characters: ${currentLength}/${MAX_MESSAGE_LENGTH}`;
        if(currentLength > MAX_MESSAGE_LENGTH) {
            charactersLeftDiv.style.color = 'var(--error)';
        } else {
            charactersLeftDiv.style.color = 'var(--onLightBG)';
        }
    }

    // Event listeners
    // real time validation and error update for the email field
    emailInput.addEventListener('input', () => {
        validateEmail();
    })

    // real time validation, error update and update of characters left for the message field
    messageInput.addEventListener('input', () => {
        updateCharacterCount();
        validateMessage();
    })

    // form submission handler
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // run all the validations defined above
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        // if both validations are valid then the form can be submitted
        if(isEmailValid && isMessageValid) {
            alert("Form submitted successfully! (demo from the client side)");
            // clear content
            contactForm.reset();
            updateCharacterCount();
            clearError(emailErrorDiv);
            clearError(messageErrorDiv);
        }
    })

}

export {setupContactFormValidation}
