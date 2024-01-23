// Function to handle radio button changes
function toggleFormStyle() {
    // Get the selected form type
    const selectedFormType = document.querySelector('input[name="formType"]:checked').value;

    // Get the form container element
    const formContainer = document.getElementById('formContainer');

    // Remove all existing form type classes
    formContainer.classList.remove('c-form--complex-form', 'c-form--information-prompt', 'c-form--wizard', 'c-form--editable-settings');

    // Add the class based on the selected form type
    formContainer.classList.add(`c-form--${selectedFormType}`);
}

// Attach event listener to the radio group
document.getElementById('formTypeSelector').addEventListener('change', toggleFormStyle);

// Initialize the form style on page load
toggleFormStyle();

function applyInputLengthByChar() {
    this.style.width = this.value.length + 'ch';
}

// Select all input fields within .c-input--text-one-line container
document.querySelectorAll('.c-input--text-one-line input').forEach(function(input) {
    // Apply the initial width when the page loads
    applyInputLengthByChar.call(input);

    // Add event listener to each input field without executing the function
    input.addEventListener('input', applyInputLengthByChar);
});