const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const mobile = document.querySelector("#mobile");
const mobileError = document.querySelector("#mobileError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const success = document.querySelector(".success");
const button = document.querySelector("button");

function validateForm() {
  event.preventDefault();

  if(checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if(checkLength(mobile.value, 7) === true) {
    mobileError.style.display = "none";
  } else {
    mobileError.style.display = "block";
  }

  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if(checkLength(subject.value, 1) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if(checkLength(fullName.value, 0) === true && checkLength(mobile.value, 7) === true && validateEmail(email.value) === true && checkLength(subject.value, 1) === true) {
    success.style.display = "block";
    button.style.display = "none";

  } 
}




form.addEventListener("submit", validateForm)

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}