/*  -----------------------------------------------------------
      READY FUNCTION START 
  ----------------------------------------------------------- */

var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

document.addEventListener("DOMContentLoaded", () => {
    validateInput("projectName", false, 50);
    validateInput("shortDescIdea", false, 150);
    validateInput("elaborationIdea", false, 2000);
});

/*  -----------------------------------------------------------
    UNIVERSAL FUNCTIONS START 
----------------------------------------------------------- */

validateInput = (input, regex, length) => {
    var inputObject = document.getElementById(input);
    inputObject.oninput = () => {
        var is_input = inputObject.value;
        var input_msg = inputObject.nextElementSibling;

        if (regex != false) {
            var is_input = regex.test(iinputObject.value);
        }
        if (length != false) {
            if (
                inputObject.value.length <= length &&
                inputObject.value.length >= 2
            ) {
                input_msg.classList.remove("invalid");

                is_input = true;
            } else {
                input_msg.classList.add("invalid");
                is_input = false;
            }
        }

        if (is_input) {
            inputObject.classList.remove("invalid");
            inputObject.classList.add("valid");
        } else {
            inputObject.classList.remove("valid");
            inputObject.classList.add("invalid");
        }
    };
};
