//________Variables_________//
const startQuizBtn = $("#startQuizBtn");
const quizSection = $("#quiz");
const skipBtn = $("#skipBtn");
const quizForm = $("#quizForm");
const stepNoWrapp = $("#stepNo");
const stepNo = $("#stepNo strong");
const totalSteps = $("#stepNo span");
var quizResultMessage = $("#quizResultMessage");
var quizResultImg = $("#quizResultImg");

//________Questions Class_________//
class Questions {
    async getQuestions() {
        try {
            let result = await fetch("questions.json");
            let questions = await result.json();
            return questions;
        } catch (error) {
            console.log(error);
        }
    }
    checkAnswer(questionID, answer) {
        return new Promise((resolve, reject) => {
            this.getQuestions().then((array) => {
                let { questions } = array;
                let questionObj = questions.find((e) => e.id === questionID);
                if (answer === questionObj.correctAnswer) {
                    resolve("true");
                } else {
                    reject(questionObj.correctAnswer);
                }
            });
        });
    }
    testFunction(value) {
        resultMsg = value;
    }
    getRandom(array, n) {
        let shuffled = array.sort(function () {
            return 0.5 - Math.random();
        });
        let selected = shuffled.slice(0, n);
        return selected;
    }
    resetQuestions() {
        // location.reload();

        quizForm.empty();

        let html = `
        <div class="d-flex">
            <button type="button" id="skipBtn" class="m_auto">Sljedeće</button>
        </div>
        <div class="d-flex">
            <span id="stepNo" class="m_auto">
                <strong>1</strong><span>/5</span>
            </span>
        </div>`;
        quizForm.html(html);
        console.log(currentTab);
        quizSection.removeClass("active");

        this.getQuestions().then((array) => {
            let { questions } = array;
            let displayQuestions = this.getRandom(questions, 10);
            questionsObject.appendQuestions(displayQuestions);
            showTab(0);
            currentTab = 0;
        });
    }
    appendQuestions(array) {
        let tabs = "";
        for (let i = 0; i < array.length; i++) {
            tabs += `<div class="tab">
                    <div class="single_question_wrapp">
                        <h4>${array[i].question}</h4>
                        <div class="question_btn_container">
                            <div class="column">
                                <button type="button" 
                                id="check_${array[i].id}_${i + 1}" 
                                class="check_btn"
                                >${array[i].answers[0]}</button>
                                <button type="button" 
                                id="check_${array[i].id}_${i + 1}" 
                                class="check_btn"
                                >${array[i].answers[1]}</button>
                            </div>
                            <div class="column">
                                <button type="button" 
                                id="check_${array[i].id}_${i + 1}" 
                                class="check_btn"
                                >${array[i].answers[2]}</button>
                                <button type="button" 
                                id="check_${array[i].id}_${i + 1}" 
                                class="check_btn"
                                >${array[i].answers[3]}</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        $("#quizForm").prepend(tabs);
        totalSteps.html(`/${array.length}`);
        multiStepTabs = $(".tab");
    }
}

var currentTab = 0;
var multiStepTabs = "";
const questionsObject = new Questions();

//________After Dom is Loaded _________//
document.addEventListener("DOMContentLoaded", () => {
    var displayQuestions = [];
    // get all questions
    questionsObject.getQuestions().then((array) => {
        let { questions } = array;
        displayQuestions = questionsObject.getRandom(questions, 10);
        questionsObject.appendQuestions(displayQuestions);
        showTab(0);
    });
});

//________Funcionality Class_________//
class Funcionality {}

//________Event Listeners_________//
startQuizBtn.on("click", () => {
    quizSection.addClass("active");
    quizForm.addClass("zoomIn");
});

$(document).on("click", ".check_btn", function () {
    $(".check_btn").attr("disabled", true);
    $("#skipBtn").attr("disabled", true);
    $(".check_btn").css("pointer-events", "none");

    let answer = $(this).html();
    let questionID = this.id.split("_")[1];
    let totalScore = 0;

    questionsObject
        .checkAnswer(questionID, answer)
        .then((msg) => {
            $(this).addClass("correct");
            $(this).addClass("valid");
        })
        .catch((error) => {
            $(this).addClass("wrong");
            $(".check_btn").each(function () {
                if ($(this).html() === error) {
                    $(this).addClass("correct");
                }
            });
        });
    $(".check_btn").each(function () {
        if ($(this).hasClass("valid")) {
            totalScore++;
        }
    });

    if (totalScore <= 4) {
        quizResultMessage.html("Moras da ponovis gradivo.");
        quizResultImg.attr("src", "img/quiz/bad.svg");
    } else if (totalScore > 4 && totalScore <= 8) {
        quizResultMessage.html("Dobar si!");
        quizResultImg.attr("src", "img/quiz/good.svg");
    } else {
        quizResultMessage.html("Expert!");
        quizResultImg.attr("src", "img/quiz/pro.svg");
    }
    console.log(totalScore);

    setTimeout(() => {
        skipQuestion(1);
    }, 1500);
});

$(document).on("click", "#skipBtn", function () {
    if ($(this).html() === "Sljedeće") {
        skipQuestion(1);
    } else {
        questionsObject.resetQuestions();
    }
});

function checkAnswer(answer) {}

//________MultiStep Form_________//
function showTab(n) {
    const animations = ["animated", "fadeIn"];

    var x = $(".tab");
    x[n].classList.add(...animations);

    x[n].style.display = "block";
    if (currentTab > 0) {
        $(".check_btn").attr("disabled", false);
        $("#skipBtn").attr("disabled", false);
        $(".check_btn").css("pointer-events", "visible");
    }

    stepNo.html(currentTab + 1);

    if (n == multiStepTabs.length - 1) {
        skipBtn.html("U redu");
        stepNoWrapp.css("display", "none");
    } else {
        skipBtn.html("Sljedeće");
    }
}

function skipQuestion(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab == x.length + 1) {
        alert("kraj");
        return;
    }
    showTab(currentTab);
}
