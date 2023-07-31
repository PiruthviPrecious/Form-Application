// Function to remove the error message
function removeError(element) {
    element.parentElement.querySelector(".error").textContent = "";
  }
  
  // Function to display the error message
  function showError(element, message) {
    element.parentElement.querySelector(".error").textContent = message;
  }
  
  // Function to validate the form
  function validateForm() {
    const form = document.getElementById("form");
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const dob = document.getElementById("dob");
    const gender = document.querySelector("input[name=gender]:checked");
    const course = document.getElementById("course");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirmPass");
    const checkbox = document.getElementById("checkbox");
  
    // Reset previous error messages
    const errorElements = form.querySelectorAll(".error");
    errorElements.forEach((errorElement) => (errorElement.textContent = ""));
  
    // Validation for First Name
    if (firstName.value.trim() === "") {
      showError(firstName, "First Name is required");
    }
  
    // Validation for Last Name
    if (lastName.value.trim() === "") {
      showError(lastName, "Last Name is required");
    }
  
    // Validation for Date of Birth
    if (dob.value === "") {
      showError(dob, "Date of Birth is required");
    }
  
    // Validation for Gender
    // if (!gender) {
    //   showError(document.querySelector(".gender"), "Gender is required");
    // }
//     const genderInputs = document.querySelectorAll('input[name="gender"]');
//   const isGenderSelected = Array.from(genderInputs).some((input) => input.checked);

//   if (!isGenderSelected) {
//     showError(document.querySelector(".gender"), "Gender is required");
//   }
const genderInputs = document.querySelectorAll('input[name="gender"]');
const isGenderSelected = Array.from(genderInputs).some((input) => input.checked);

if (!isGenderSelected) {
  showError(document.querySelector(".gender"), "Gender is required");
} else {
  removeError(document.querySelector(".gender"));
}

    // Validation for Course
    if (course.value === "default") {
      showError(course, "Please select a course");
    }
  
    // Validation for Phone
    if (phone.value.trim() === "") {
      showError(phone, "Mobile is required");
    }
  
    // Validation for Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      showError(email, "Invalid email address");
    }
  
    // Validation for Password
    if (password.value.trim() === "") {
      showError(password, "Password is required");
    }
  
    // Validation for Confirm Password
    if (confirmPass.value !== password.value) {
      showError(confirmPass, "Passwords do not match");
    }
  
    // Validation for Checkbox
    if (!checkbox.checked) {
      showError(checkbox, "You must agree to the terms and conditions");
    }
  }

  
  
  // Attach the validation function to the form submission event
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });
  
  // Attach the validation function to the input events for each input field
  const inputFields = document.querySelectorAll("#form input, #form select, #form textarea");
  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", () => {
      removeError(inputField);
    });
  });
  // Attach the validation function to the change event for gender inputs
const genderInputs = document.querySelectorAll('input[name="gender"]');
genderInputs.forEach((input) => {
  input.addEventListener("change", () => {
    removeError(document.querySelector(".gender"));
  });
});