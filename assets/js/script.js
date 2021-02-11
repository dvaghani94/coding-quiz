function start() {
    var h1 = document.querySelector(".container");
    var h2 = document.querySelector(".quiz-section");

    //need to block this section until quiz end 
    var h3 = document.querySelector(".end-quiz");
    if (h1) {
    if (h1.style.display === "none") {
        h1.style.display = "block";
        h2.style.display = "none";
        h3.style.display = "none";
    }
    else {
        h1.style.display = "none";
        h2.style.display = "block";
        h3.style.display = "block";
    }
  }
  countDown(time)
}

var codingQuestion = [ {
    question: "which does css stand for?",
    options: [
        "casacading style sheet",
        "cascading sheet style",
        "cresending style sheet",
        "cresting style sheet",
    ],
    answer: "cascading style sheet"
},
{
    question: "Which tag is commonly used first in an html?",
    options: [
        "footer",
        "header",
        "body",
        "html",
    ],
    answers: "html"
},
{
    question: "what is the cloding tag for <h2>",
    options: [
        "<h2>",
        "</h2>",
        "<h1>",
        "</h1>",
    ],
    answers: "</h2>"
},
{
    question: "What does js stand for?",
    options: [
        "javascore",
        "javaships",
        "javascript",
        "javasyrup",
    ],
    answers: "javascript"
},
{
    question: "How do you attach an img in html?", 
    options: [
        "<img src=",
        "<img",
        "<img tag",
        "<src img",
    ],
    answers: "<img src="
}
];

console.log(codingQuestion)

var questionPool = 0;
var answerPool = 1;

window.onload = function() {
    show(0);
}

function nextQuestion() {
    questionPool++;
    console.log(questionPool);

    countDown(time)
}
// need to check if answer gets selected
function selected(answer) {
    var userChoice = answer.textContent;
    console.log(userAnswer)
    var correctAnswer = codingQuestion[answerPool].answer;
    if(userChoice == correctAnswer) {
        answer.classList.add("correct");
        console.log('Correct Answer');
    }
    else {
        answer.classList.add("incorrect");
        console.log('Incorrect Answer');
    }
}

function show(index) {
    var quizQuestions = document.querySelector(".question-text")
    var questionChoice = document.querySelector(".buttons-group")

    quizChoices = '<h2>' + codingQuestion[index].question + '</h2>';

    var quizOptions = 
     '<ul class="buttons">' + codingQuestion[index].options[0] + '<li></li></ul>' +
     '<ul class="buttons">' + codingQuestion[index].options[1] + '<li></li></ul>' +
     '<ul class="buttons">' + codingQuestion[index].options[2] + '<li></li></ul>' +
     '<ul class="buttons">' + codingQuestion[index].options[3] + '<li></li></ul>' ;

     quizQuestions.innerHTML = quizOptions;
     questionChoice.innerHTML = quizChoices; 

     var userChoice = questionChoice.querySelectorAll(".buttons");
     for(let i = 0; i < questionChoice.length; i++) {
         questionChoice[i].setAttribute("onclick", "selected(this)")
     }

}

var time = document.querySelector(".timer");
var timeCount;
var timeLimit = 30;

// need to have time start when start btn clicked
function countDown(time) {
    timeCount = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time < 9) {
            var inputZero = timeCount.textContent;
            timeCount.textContent = "0" + inputZero;
        }
        if(time < 0) {
            clearInterval();
            timeCount.textContent = "00";
        }
    }
}

// need to change function to show name input option
function showResults() {
    var h3 = document.querySelector(".end-quiz");
    var h2 = document.querySelector(".quiz-section");
    if (h2) {
    if (h2.style.display === "none") {
        h2.style.display = "block";
        h3.style.display = "none";
    }
    else {
        h2.style.display = "none";
        h3.style.display = "block";
    }
  }
}

// function/button for score board + store data/answers
 