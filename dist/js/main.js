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
const selectedFile = document.querySelector("#selectedFile");

const animations = ["animated", "slideInUp"];
const animations1 = ["animated", "bounceInLeft"];

var tempArticle = 1;
var max = 3;
var limit = false;

//________after DOM is loaded________//
document.addEventListener("DOMContentLoaded", () => {
    const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    validateInput("projectName", false, 50);
    validateInput("shortDescIdea", false, 150);
    validateInput("elaborationIdea", false, 2000);
    validateInput(`article1`, false, 50);
    validateInput(`biography1`, false, 150);
    validateInput(`video`, urlRegex, 150);

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

    selectedFile.oninput = (event) => {
        if (event.target.id == "selectedFile") {
            selectedFile.classList.add("active");
            validateFile("selectedFile");
        }
    };

    addArticleBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (limit) {
            return;
        }
        tempArticle++;
        var newNode = document.createElement("div");
        newNode.className = "inputGroup";
        newNode.id = `inputGroup${tempArticle}`;
        newNode.innerHTML = `
                <div class="form-group">
                    <div class="d-flex justify-content-between">
                        <label for="article${tempArticle}">Član ${tempArticle}</label>
                        <i class="fa fa-times-circle remove" id="${tempArticle}"></i>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ime i prezime"
                        name="article${tempArticle}"
                        id="article${tempArticle}"
                    />
                    <span class="input_msg">Ime I prezime 2 – 50 karaktera</span>
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Kratka biografija (max 150 karaktera)"
                        name="biography${tempArticle}"
                        id="biography${tempArticle}"
                    />
                    <span class="input_msg">Kratka biografija 2 – 150 karaktera</span>
                </div>
            `;
        articles.appendChild(newNode);
        validateInput(`article${tempArticle}`, false, 2000);
        validateInput(`biography${tempArticle}`, false, 2000);
        if (tempArticle == max) {
            limit = true;
        } else {
            limit = false;
        }
    });
});

body.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
        tempArticle--;
        articles.removeChild(articles.lastElementChild);

        if (articles.children.length == 1) {
            limit = false;
        }
    }
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
    document.documentElement.style.setProperty("--screen-y", this.innerHeight);
});

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
    if (currentTab == x.length - 1) {
        submitForm();
    }
    if (currentTab >= x.length) {
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    currentStep.innerHTML = currentTab + 1;

    rocket;
}

function validateForm() {
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByClassName("form-input");
    for (i = 0; i < y.length; i++) {
        if (y[i].classList.contains("valid")) {
            valid = true;
        } else {
            valid = false;
        }
    }
    return valid;
}

/*  -----------------------------------------------------------
    UNIVERSAL FUNCTIONS START 
----------------------------------------------------------- */

function submitForm() {
    var form_data = document.querySelector(".multi_step_form").elements;
    console.log(form_data);

    var listItems = "";
    for (var input in form_data) {
        var element = document.getElementById(form_data[input]["name"]);
        if (element != null && element.value != "undefined") {
            console.log("value" + element.value + " - element: " + element);

            listItems += `<li><b>${element.placeholder}: </b><span>${element.value}</span></li>`;
        }
    }
    document.getElementById("formResults").innerHTML = listItems;
}

validateInput = (input, regex, length) => {
    var inputObject = document.getElementById(input);
    var validRegex = true;
    inputObject.oninput = () => {
        var is_input = inputObject.value;
        var input_msg = inputObject.nextElementSibling;

        if (regex != false) {
            regex.test(inputObject.value)
                ? (validRegex = true)
                : (validRegex = false);
        }
        if (length != false) {
            inputObject.value.length <= length && inputObject.value.length >= 2
                ? (is_input = true)
                : (is_input = false);
        }

        if (is_input && validRegex) {
            inputObject.classList.remove("invalid");
            inputObject.classList.add("valid");
            input_msg.classList.remove("invalid");
        } else {
            inputObject.classList.remove("valid");
            inputObject.classList.add("invalid");
            input_msg.classList.add("invalid");
        }
    };
};

function validateFile(input) {
    var inputObject = document.getElementById(input);
    var is_input = inputObject.value;
    var input_msg = document.getElementById("upload_msg");
    if (is_input != "") {
        var checkValue = inputObject.value.toLowerCase();
        if (!checkValue.match(/(\.ppt|\.pptx)$/)) {
            input_msg.classList.remove("valid");
            input_msg.classList.add("invalid");
            inputObject.classList.remove("valid");
            inputObject.classList.add("invalid");
            input_msg.innerHTML = "Dozvoljen upload fajlova .ppt i .pptx";
            return false;
        }
        if (inputObject.files[0].size > 5000000) {
            input_msg.classList.remove("valid");
            input_msg.classList.add("invalid");
            inputObject.classList.remove("valid");
            inputObject.classList.add("invalid");
            input_msg.innerHTML = "Dozvoljen upload fajlova veličine do 5MB";
            return false;
        }
        input_msg.classList.remove("invalid");
        input_msg.classList.add("valid");
        inputObject.classList.remove("invalid");
        inputObject.classList.add("valid");
        input_msg.innerHTML = "";
        return true;
    }
}
