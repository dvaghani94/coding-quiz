function start() {
    var h1 = document.querySelector(".container");
    var h2 = document.querySelector(".quiz-section");
    if (h1) {
    if (h1.style.display === "none") {
        h1.style.display = "block";
        h2.style.display = "none";
    }
    else {
        h1.style.display = "none";
        h2.style.display = "block";
    }
  }
}

var codingQuestion = [ {
    id: 1,
    question: "which letter is correctly matched?",
    options: {
        a: "e",
        b: "f",
        c: "g",
        d: "d",
    },
    answer: "d"
},
{
    id: 2,
    question: "which letter is correctly matched?",
    options: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    answers: "c"
},
{
    id: 3,
    question: "which letter is correctly matched?",
    options: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    answers: "c"
},
{
    id: 4,
    question: "which letter is correctly matched?",
    options: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    answers: "c"
},
{
    id: 5,
    question: "which letter is correctly matched?", 
    options: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    answers: "c"
}
];

console.log(codingQuestion)

var questionPool = 0;
var questionsLeft = [];

window.onload = function() {
    show(0);
}

function show(index) {
    var quizQuestions = document.querySelector(".question-text");
    var quizOptions = document.querySelector(".buttons-group");

    var currentQuestion = '<h2>' + codingQuestion[index].question + '</h2>';
    optionsLeft();
}

function optionsLeft() {
    for(var i = 0; i < quizOptions; i++);
}

function getNextQuestion() {
    questionPool++;
    show(questionPool);
}