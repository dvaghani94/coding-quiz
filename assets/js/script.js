var quizButton = document.getElementById('.buttons-group');


var codingQuestion = [ {
    questions: "which letter is correctly matched?",
    answers: {
        a: "e",
        b: "f",
        c: "g",
        d: "d",
    },
    correctAnswer: "d"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
}
];

function questions(count) {
    var quizQuestions = document.getElementById('questions');

    quizQuestions.value = "<h2>$(quizQuestions(count).codingQuestions)</h2>"



function results() {
    var trackResults = quizQuestions.querySelectorAll('.answers');

    var numCorrect = 0;

    codingQuestion.forEach((currentQuestion, questionNumber))
    var endResult = trackResults[questionNumber];
    var totalSelected = 'input[name=questions $(questionNumber)] : checked';
    var endScore = (trackResults.querySelector(totalSelected) || [] ).value;

    if(endScore === currentQuestion.correctAnswer) {
        numCorrect++;

        trackResults[questionNumber].getElementsByClassName.color = 'violet';
    }
    else {
        trackResults[questionNumber].getElementsByClassName.color = 'grey';
    }

    scoreResults.value = '$([numCorrect]) out of $[codingQuestion.length])';
