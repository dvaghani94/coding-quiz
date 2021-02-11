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

window.onload = function() {
    show(0);
}

function show(index) {
    var quizQuestions = document.querySelector(".question-text")

    quizQuestions.innerHTML = '<h2>' + codingQuestion[index].question + '</h2>';
     '<ul class="buttons-group">'
     '<li class="buttons">' + codingQuestion[index].options[0] + '</li>'
     '<li class="buttons">' + codingQuestion[index].options[1] + '</li>'
     '<li class="buttons">' + codingQuestion[index].options[2] + '</li>'
     '<li class="buttons">' + codingQuestion[index].options[3] + '</li>'
    '</ul>';
}

function questionPool() {
    questionPool++;
    console.log(questionPool);
}
    
window.onload = function() {
    show(0);
}