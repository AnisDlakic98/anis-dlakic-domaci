//________variables________//
const runFormBtn = document.querySelector("#run_form");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const currentStep = document.querySelector("#current_step");
const rocket = document.querySelector("#rocket");

//________after DOM is loaded________//
document.addEventListener("DOMContentLoaded", () => {
    runFormBtn.addEventListener("click", (event) => {
        event.preventDefault();
        body.classList.add("active");
        rocket.classList.add("active");
    });
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    x[n].classList.add("bounceInLeft");
    wrapper.scrollTo({ top: 0 });
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Dalje";
    }
    if (currentTab == 0 && body.classList.contains("active")) {
        rocket.className = "";
        rocket.classList.add("active");
    } else if (currentTab == 1) {
        rocket.className = "";
        rocket.classList.add("one");
    } else if (currentTab == 2) {
        rocket.className = "";
        rocket.classList.add("two");
    }
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    currentStep.innerHTML = currentTab + 1;

    rocket;
}

function validateForm() {
    // This function deals with validation of the form fields
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className +=
            " finish";
    }
    return valid; // return the valid status
}
