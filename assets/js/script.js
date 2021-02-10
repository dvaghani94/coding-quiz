var quizQuestions = document.querySelector(".question");
var questionNumbers = document.querySelector(".number");
var questionOptions = document.querySelector(".buttons-group");

var questions = 0;
var currentQuestion;
var questionsLeft = []

var codingQuestion = [ {
    questions: "which letter is correctly matched?",
    options: {
        a: "e",
        b: "f",
        c: "g",
        d: "d",
    },
    answer: "d"
},
{
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
var currentQuestion;
var questionsLeft = [];
var optionsLeft = [];

function setQuestionsLeft() {
    var totalQuestion = codingQuestion.length;
    for(var i = 0; i < totalQuestion; i++) {
        questionsLeft.push(codingQuestion[i])
    }
}

function nextQuestion() {
    var randomQuestion = questionsLeft[Math.floor(Math.random() * questionsLeft.length)];
    console.log(randomQuestion)

    var optionChoice = currentQuestion.questionOptions.length
    for(var i = 0; i < optionChoice; i++) {
        optionsLeft.push(i)
    }

    questionPool++
}
function quizEnd() {
    if(questionPool === codingQuestion.length) {
    }
    else {
        nextQuestion();
    }
}
