//________variables________//
const runFormBtn = document.querySelector("#run_form");
const wrapper = document.querySelector(".wrapper");
const multi__step = document.querySelector(".multi__step");
const body = document.querySelector("body");
const currentStep = document.querySelector("#current_step");
const rocket = document.querySelector("#rocket");
const main__logo = document.querySelector(".main__logo");
const toHomePage = document.querySelector("#toHomePage");
const addArticleBtn = document.querySelector("#addArticleBtn");
const articles = document.querySelector("#articles");

const animations = ["animated", "slideInUp"];
const animations1 = ["animated", "bounceInLeft"];

//________after DOM is loaded________//
document.addEventListener("DOMContentLoaded", () => {
    runFormBtn.addEventListener("click", (event) => {
        event.preventDefault();
        body.classList.add("active");
        rocket.classList.add("active");
        multi__step.classList.add(...animations);
    });
    toHomePage.addEventListener("click", (event) => {
        event.preventDefault();
        location.reload();
    });

    var tempArticle = 1;
    var max = 2;

    addArticleBtn.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(tempArticle);

        tempArticle++;
        if (tempArticle > max) {
            tempArticle = 1;
            return;
        }
        addArticleBtn.style.display = "block";
        articles.innerHTML += `<div id="inputGroup1" class="inputGroup">
        <div class="form-group">
            <label for="projectName">Član ${tempArticle}</label>
            <input
                type="text"
                class="form-control"
                placeholder="Ime i prezime"
                name="projectName"
                id="projectName"
            />
        </div>
        <div class="form-group">
            <input
                type="text"
                class="form-control"
                placeholder="Kratka biografija (max 150 karaktera)"
                name="biographyOne"
                id="biographyOne"
            />
        </div>
    </div>`;
    });
});

var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText =
            typeof css === "string"
                ? css
                : Object.keys(css)
                      .map(function (p) {
                          return (
                              p +
                              ":" +
                              (p === "content" ? "'" + css[p] + "'" : css[p])
                          );
                      })
                      .join(";");
        sheet.insertRule(
            selector + "{" + propText + "}",
            sheet.cssRules.length
        );
    };
})(document.createElement("style"));

window.addEventListener("resize", function () {
    // alert(this.innerHeight);
    document.documentElement.style.setProperty("--screen-y", this.innerHeight);
});

// document.addEventListener("resize", () => {});

var currentTab = 0;
showTab(currentTab);
function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    x[n].classList.add(...animations1);
    wrapper.scrollTo({ top: 0 });
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == 2) {
        document.getElementById("nextBtn").innerHTML = "Pošalji prijavu";
    } else if (n == x.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        body.classList.add("finish");
        main__logo.src = "img/logo-dark.svg";
        currentTab = 0;
    } else {
        document.getElementById("nextBtn").innerHTML = "Dalje";
    }
    if (currentTab == 0 && body.classList.contains("active")) {
        rocket.className = "";
        rocket.classList.add("active");
        addRule("body:before", {
            bottom: "1%",
            transform: "translateY(0%) scale(1.1) !important",
        });
    } else if (currentTab == 1) {
        rocket.className = "";
        rocket.classList.add("one");
        addRule("body:before", {
            bottom: "5%",
            transform: "translateY(-5%) scale(1.1) !important",
        });
    } else if (currentTab == 2) {
        rocket.className = "";
        rocket.classList.add("two");
        addRule("body:before", {
            bottom: "10%",
            transform: "translateY(-10%) scale(1.1) !important",
        });
    }
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
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
