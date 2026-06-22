// Form Validation with Regular Expressions
// This file handles validation of alphanumeric input

// Step 1: Retrieve the input field element using JavaScript
const inputField = document.getElementById("alphanumericInput");

// Get references to error and success message divs
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

// Get reference to the form
const form = document.getElementById("myForm");

// Regular expression for alphanumeric validation
// ^ = start of string
// [a-zA-Z0-9] = letters A-Z, a-z, and numbers 0-9
// + = one or more characters
// $ = end of string
const alphanumericRegex = /^[a-zA-Z0-9]+$/;

// Function to validate input value using regular expression
function validateInput(inputValue) {
    // Test if input matches alphanumeric pattern
    return alphanumericRegex.test(inputValue);
}

// Function to hide all messages
function hideMessages() {
    errorMessage.classList.remove("show");
    successMessage.classList.remove("show");
}

// Function to display error message
function showError() {
    errorMessage.classList.add("show");
    successMessage.classList.remove("show");
}

// Function to display success message
function showSuccess() {
    successMessage.classList.add("show");
    errorMessage.classList.remove("show");
}

// Step 2: Add an event listener to the form that submits an event
form.addEventListener("submit", function(event) {
    
    // Get the input value and remove leading/trailing spaces
    const inputValue = inputField.value.trim();
    
    // Hide any previous messages
    hideMessages();
    
    // Step 3 & 4: Validate using regular expression
    if (inputValue === "") {
        // Empty input - show error
        showError();
        errorMessage.innerHTML = "❌ Error: Please enter a value. The field cannot be empty!";
        event.preventDefault(); // Prevent form submission
    }
    else if (validateInput(inputValue)) {
        // Step 5: Display confirmation for valid input
        showSuccess();
        successMessage.innerHTML = "✅ Success! \"" + inputValue + "\" is valid alphanumeric input! Form submitted successfully!";
        
        // The form would submit here, but WCET server doesn't process forms
        console.log("Form submitted with valid value: " + inputValue);
        // Note: event.preventDefault() is NOT called for valid input
        // This allows the form to "submit" (though WCET doesn't process it)
    }
    else {
        // Step 3 & 4: Display error message and prevent form submission for non-alphanumeric
        showError();
        errorMessage.innerHTML = "❌ Error: \"" + inputValue + "\" contains invalid characters. Please enter only alphanumeric characters (A-Z, a-z, 0-9). No spaces or special characters allowed!";
        event.preventDefault(); // Prevent form submission
    }
});

// Optional: Add real-time validation as user types (bonus feature)
inputField.addEventListener("input", function() {
    // Hide messages when user starts typing again
    hideMessages();
});

// Console log to confirm JavaScript is loaded
console.log("validateScript.js loaded successfully!");