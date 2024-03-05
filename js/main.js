// Validate Email Input
let emailInput = document.querySelector("#email");
let alertMsg = document.querySelector("form span");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
document.forms[0].onsubmit = function (e) {
  if (emailRegex.test(emailInput.value)) {
    alertMsg.style.visibility = "hidden";
    emailInput.classList.remove("alert");
    return true;
  } else {
    alertMsg.style.visibility = "visible";
    emailInput.classList.add("alert");
    return false;
  }
};
