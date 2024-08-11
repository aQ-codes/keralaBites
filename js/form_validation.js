// form validation

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    // Do nothing if form not validated
    if (!validateForm(form)) return;
    // Else
    else {
        window.alert("Message Successfully Sent")
    }
});

const validateForm = (form) => {
    let valid = true;
    // Check for empty fields
    let name = form.querySelector(".name");
    let email = form.querySelector(".email");
    let message = form.querySelector(".message");

    if (name.value === "") {
        giveError(name, "Please enter your name");
        valid = false; // Set valid to false
    }

    if (message.value === "") {
        giveError(message, "Please enter your message");
        valid = false; // Set valid to false
    }

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = email.value;
    if (!emailRegex.test(emailValue)) {
        giveError(email, "Please enter a valid email");
        valid = false; // Set valid to false
    }

    return valid; // Return true if valid otherwise false
}

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    // If error message exists already, then remove it
    let existingError = parentElement.querySelector(".err-msg");
    if (existingError) {
        existingError.remove();
    }
    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg");
    parentElement.appendChild(error);
}

// Remove error on input
const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

let allFields = [...inputs, ...textarea];

allFields.forEach((field) => {
    field.addEventListener("input", () => {
        removeError(field);
    });
});

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error");
    let error = parentElement.querySelector(".err-msg");
    if (error) {
        error.remove();
    }
};
